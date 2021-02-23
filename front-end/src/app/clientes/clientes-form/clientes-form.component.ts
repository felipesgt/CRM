import { DropdownService } from '../services/dropdown.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from "rxjs"

import { ConsultaCepService } from '../services/cep.service';
import { Cliente } from '../models/clientes.model';
import { ClientesService } from '../services/clientes.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Cidade } from '../models/cidades.model';
import { EstadoBr } from '../models/estados.model';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})

export class ClientesFormComponent extends BaseFormComponent implements OnInit, OnDestroy {
  cliente: Cliente
  estados: EstadoBr[];
  cidades: Cidade[];
  sub = new Subject<void>();
  pageTitle: string;
  form: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private dropdownService: DropdownService,
    private router: Router,
    private route: ActivatedRoute,
    protected snackBar: MatSnackBar,
    private fb: FormBuilder,
    private cepService: ConsultaCepService
  ) {
    super(snackBar)
  }


  ngOnInit(): void {
    this.dropdownService.getEstadosBr().pipe(takeUntil(this.sub))
      .subscribe(dados => this.estados = dados)

    const cliente = this.route.snapshot.data['cliente'];

    cliente.id === 0 ? this.pageTitle = "Novo Cliente" :
      this.pageTitle = "Editar Cliente"

    this.form = this.fb.group({
      id: [cliente.id],
      nome: [cliente.nome, [Validators.required, Validators.minLength(3)]],
      email: [cliente.email, [Validators.required, Validators.email]],
      cpf: [cliente.cpf, [Validators.required,
      Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]],
      data: [cliente.data, Validators.required],
      phone: [cliente.phone, [Validators.required, Validators.minLength(12),
      Validators.pattern(/^[0-9]+$/)]],
      endereco: this.fb.group({
        cep: [cliente.cep, [Validators.required, Validators.minLength(5)]],
        numero: [cliente.numero, [Validators.required, Validators.minLength(1)]],
        rua: [cliente.rua, [Validators.required, Validators.minLength(2)]],
        bairro: [cliente.bairro, [Validators.required, Validators.minLength(3)]],
        cidade: [cliente.cidade, [Validators.required, Validators.minLength(2)]],
        estado: [cliente.estado, [Validators.required, Validators.minLength(2)]]
      }),
    }),

      this.form.get('endereco.estado').valueChanges.pipe(
        map(estados => this.estados.filter(e => e.sigla === estados)),
        map(estados => estados && estados.length > 0 ? estados[0].id : 0),
        switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
        (takeUntil(this.sub))).subscribe(cidades => this.cidades = cidades)
  }


  consultCEP() {
    const cep = this.form.get('endereco.cep').value;
    if (cep != null && cep !== '') {
      this.cepService.consultCEP(cep).pipe(takeUntil(this.sub))
        .pipe(takeUntil(this.sub)).subscribe(dados => this.fillForm(dados))
    }
  }


  fillForm(dados: any): void {
    this.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  onSubmit(): void {
    this.formSaved = true;
    if (this.form.dirty && this.form.valid) {
      const cliente = Object.assign({}, this.cliente, this.form.value);
      if (cliente.id === 0) {
        this.clientesService.save(cliente).
          pipe(takeUntil(this.sub)).subscribe(() => {
            this.openSnackBar("Cliente criado com sucesso!", "Fechar")
            this.router.navigate(['/clientes'])
          },
            (error) => {
              this.openSnackBar("Houve um erro ao criar um novo cliente", "Fechar")
            }
          )
      }
      else {
        this.updateCustomer(cliente)
      }
    }
  }


  updateCustomer(cliente: Cliente): void {
    this.clientesService.update(cliente, cliente.id).
      pipe(takeUntil(this.sub)).subscribe(() => {
        this.openSnackBar("Cliente atualizado com sucesso!", "Fechar")
        this.router.navigate(['/clientes'])
      },
        (error) => {
          this.openSnackBar("Houve um erro ao atualizar um cliente", "Fechar")
        }
      )
  }

  ngOnDestroy(): void {
    this.sub.next()
  }
}

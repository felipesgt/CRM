import { DropdownService } from '../services/dropdown.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { ConsultaCepService } from '../services/cep.service';
import { Lead } from '../models/leads.model';
import { LeadsService } from '../services/leads.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Cidade } from '../models/cidades.model';
import { EstadoBr } from '../models/estados.model';

@Component({
  selector: 'app-leads-form',
  templateUrl: './leads-form.component.html',
  styleUrls: ['./leads-form.component.css']
})

export class LeadsFormComponent extends BaseFormComponent implements OnInit, OnDestroy {
  leads: Lead;
  estados: EstadoBr[];
  cidades: Cidade[];
  sub = new Subject<void>();
  pageTitle: string;
  form: FormGroup;

  constructor(
    private leadsService: LeadsService,
    private dropdownService: DropdownService,
    private router: Router,
    private route: ActivatedRoute,
    protected snackBar: MatSnackBar,
    private fb: FormBuilder,
    private cepService: ConsultaCepService
  ) {
    super(snackBar);
  }


  ngOnInit(): void {
    this.dropdownService.getEstadosBr().pipe(takeUntil(this.sub))
      .subscribe(dados => this.estados = dados);

    const lead = this.route.snapshot.data.lead;

    lead.id === 0 ? this.pageTitle = 'Novo lead' :
      this.pageTitle = 'Editar lead';

    this.form = this.fb.group({
      id: [lead.id],
      nome: [lead.nome, [Validators.required, Validators.minLength(3)]],
      email: [lead.email, [Validators.required, Validators.email]],
      cpf: [lead.cpf, [Validators.required,
      Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]],
      data: [lead.data, Validators.required],
      phone: [lead.phone, [Validators.required, Validators.minLength(12),
      Validators.pattern(/^[0-9]+$/)]],
      endereco: this.fb.group({
        cep: [lead.cep, [Validators.required, Validators.minLength(5)]],
        numero: [lead.numero, [Validators.required, Validators.minLength(1)]],
        rua: [lead.rua, [Validators.required, Validators.minLength(2)]],
        bairro: [lead.bairro, [Validators.required, Validators.minLength(3)]],
        cidade: [lead.cidade, [Validators.required, Validators.minLength(2)]],
        estado: [lead.estado, [Validators.required, Validators.minLength(2)]]
      }),
    }),

      this.form.get('endereco.estado').valueChanges.pipe(
        map(estados => this.estados.filter(e => e.sigla === estados)),
        map(estados => estados && estados.length > 0 ? estados[0].id : 0),
        switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
        (takeUntil(this.sub))).subscribe(cidades => this.cidades = cidades);
  }


  public consultCEP(): void {
    const cep = this.form.get('endereco.cep').value;
    if (cep != null && cep !== '') {
      this.cepService.consultCEP(cep).pipe(takeUntil(this.sub))
        .pipe(takeUntil(this.sub)).subscribe(dados => this.fillForm(dados));
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
      const lead = Object.assign({}, this.leads, this.form.value);
      if (lead.id === 0) {
        this.leadsService.save(lead).
          pipe(takeUntil(this.sub)).subscribe(() => {
            this.openSnackBar('lead criado com sucesso!', 'Fechar');
            this.router.navigate(['/leads']);
          },
            (error) => {
              this.openSnackBar('Houve um erro ao criar um novo lead', 'Fechar');
            }
          );
      }
      else {
        this.updateCustomer(lead);
      }
    }
  }


  updateCustomer(lead: Lead): void {
    this.leadsService.update(lead, lead.id).
      pipe(takeUntil(this.sub)).subscribe(() => {
        this.openSnackBar('lead atualizado com sucesso!', 'Fechar');
        this.router.navigate(['/leads']);
      },
        (error) => {
          this.openSnackBar('Houve um erro ao atualizar um lead', 'Fechar');
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.next();
  }
}

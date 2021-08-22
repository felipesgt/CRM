import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Produtos } from '../models/produtos.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent extends BaseFormComponent implements OnInit, OnDestroy {
  produto: Produtos;
  private sub = new Subject<void>();
  pageTitle: string;


  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    protected snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) {
    super(snackBar);
  }

  ngOnInit(): void {
    const produtos = this.route.snapshot.data.produto;
    produtos.id === 0 ? this.pageTitle = 'Novo Produto' :
      this.pageTitle = 'Editar Produto';

    this.form = this.fb.group({
      nome: [produtos.nome, [Validators.required, Validators.minLength(3)]],
      preco: [produtos.preco, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      quantidade: [produtos.quantidade, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      categoria: [produtos.categoria, Validators.required]
    });
  }


  onSubmit(): void {
    this.formSaved = true;
    if (this.form.dirty && this.form.valid) {
      const produto = Object.assign({}, this.produto, this.form.value);
      if (this.route.snapshot.data.produto.id === 0) {
        this.produtosService.save(produto)
          .pipe(takeUntil(this.sub)).pipe(takeUntil(this.sub)).subscribe(() => {
            this.openSnackBar('Produto criado com sucesso!', 'Fechar');
            this.router.navigate(['/produtos']);
          },
            (error) => {
              this.openSnackBar('Houve um erro ao criar um novo produto', 'Fechar');
            });
      }
      else {
        this.updateProduct(produto);
      }
    }
  }

  updateProduct(produto: Produtos) {
    this.produtosService.update(produto, this.route.snapshot.data.produto.id)
      .pipe(takeUntil(this.sub)).subscribe(() => {
        this.openSnackBar('Produto atualizado com sucesso!', 'Fechar');
        this.router.navigate(['/produtos']);
      },
        (error) => {
          console.log(error);
          this.openSnackBar('Houve um erro ao atualizar um produto', 'Fechar');
        });
  }

  ngOnDestroy(): void {
    this.sub.next();
  }
}

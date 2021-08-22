import { ProdutosService } from '../services/produtos.service';
import { Produtos } from '../models/produtos.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialog } from '../../../shared/mat-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css'],
  providers: [ConfirmDialog]

})
export class ProdutosListaComponent implements OnInit, OnDestroy {

  produtos: Produtos[];
  errorMessage: string;
  displayedColumns = ['nome', 'preco', 'quantidade', 'categoria', 'id'];
  sub = new Subject<void>();

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.produtosService.read().
      pipe(takeUntil(this.sub)).subscribe(
        produtos => this.produtos = produtos,
        error => this.openSnackBar('Erro ao ler Produtos', 'Fechar')
      );
  }


  deletarProduto(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialog,
      { data: { title: 'Dialog', message: 'Deseja deletar esse item?' } });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().
      pipe(takeUntil(this.sub)).subscribe(result => {
        if (result === 'CONFIRMED') {
          this.produtosService.delete(id).subscribe(() => {
            this.refreshList();
            this.openSnackBar('item deletado com sucesso!', 'Fechar');
          },
            (error) => {
              this.openSnackBar('Houve um erro ao deletar esse item!', 'Fechar');
            }
          );
        }
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }

  refreshList() {
    this.produtosService.read().
      pipe(takeUntil(this.sub)).subscribe(produtos => {
        this.produtos = produtos;
      },
        (error) => {
          this.openSnackBar('Erro ao atualizar produtos', 'Fechar');
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.next();
  }
}

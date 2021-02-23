import { Cliente } from '../models/clientes.model';
import { ClientesService } from '../services/clientes.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDialog } from '../../shared/mat-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css'],
  providers: [ConfirmDialog]

})
export class ClientesListaComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public clientes: Cliente[];
  errorMessage: string;
  displayedColumns = ['nome', 'email', 'phone', 'id',]
  sub = new Subject<void>();

  constructor(
    private clientesService: ClientesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.clientesService.read().pipe(takeUntil(this.sub))
      .subscribe(
        clientes => this.clientes = clientes,
        error => this.openSnackBar("Erro ao ler Clientes", "Fechar")
      )
  }



  deleteCustomer(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialog,
      { data: { title: 'Dialog', message: 'Deseja deletar esse item?' } });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().pipe(takeUntil(this.sub)).subscribe(result => {
      if (result === "CONFIRMED") {
        this.clientesService.delete(id).subscribe(() => {
          this.refreshList();
          this.openSnackBar("item deletado com sucesso!", "Fechar")
        },
          (error) => {
            this.openSnackBar("Houve um erro ao deletar esse item!", "Fechar")
          }
        )
      }
    })
  }

  refreshList() {
    this.clientesService.read().pipe(takeUntil(this.sub)).subscribe(clientes => {
      this.clientes = clientes
    },
      (error) => {
        this.openSnackBar('Erro ao atualizar produtos', 'Fechar')
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }
  ngOnDestroy(): void {
    this.sub.next();
  }
}

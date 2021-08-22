import { Lead } from '../models/leads.model';
import { LeadsService } from '../services/leads.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../../shared/mat-dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-leads',
  templateUrl: './leads-lista.component.html',
  styleUrls: ['./leads-lista.component.css'],
  providers: [ConfirmDialog]

})
export class LeadsListaComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public leads: Lead[];
  displayedColumns = ['nome', 'email', 'phone', 'id', ];
  sub = new Subject<void>();

  constructor(
    private leadsService: LeadsService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.leadsService.read().pipe(takeUntil(this.sub))
      .subscribe(
        leads => this.leads = leads,
        error => this.openSnackBar('Erro ao ler leads', 'Fechar')
      );
  }



  deleteCustomer(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialog,
      { data: { title: 'Dialog', message: 'Deseja deletar esse item?' } });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().pipe(takeUntil(this.sub)).subscribe(result => {
      if (result === 'CONFIRMED') {
        this.leadsService.delete(id).subscribe(() => {
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

  public refreshList(): void {
    this.leadsService.read().pipe(takeUntil(this.sub)).subscribe(leads => {
      this.leads = leads;
    },
      (error) => {
        this.openSnackBar('Erro ao atualizar produtos', 'Fechar');
      }
    );
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }
  ngOnDestroy(): void {
    this.sub.next();
  }
}

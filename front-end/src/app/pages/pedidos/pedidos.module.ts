import { PedidosAppComponent } from './pedidos.app.component';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';



@NgModule({
  declarations: [PedidosFormComponent, PedidosListaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    PedidosAppComponent,
    PedidosListaComponent,
    PedidosFormComponent
  ],

})
export class PedidosModule { }

import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const pedidosRoute: Routes = [
  {
    path: '', component: PedidosListaComponent,
    children: [
      { path: '', component: PedidosFormComponent },
      { path: 'criar', component: PedidosFormComponent, },
      { path: 'editar/:id', component: PedidosFormComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(pedidosRoute)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }

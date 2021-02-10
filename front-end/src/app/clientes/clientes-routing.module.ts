import { ClientesAppComponente } from './clientes.app.component';
import { ClienteResolverGuard } from './guards/clientes-resolver.guard';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateGuard } from './guards/deactivate.guard';

const clientesRoutes: Routes = [
  {path: '', component: ClientesAppComponente,
   children: [
    {path: '', component: ClientesListaComponent},
    {path: 'criar', component: ClientesFormComponent, canDeactivate:[DeactivateGuard], resolve: {cliente: ClienteResolverGuard}},
    {path: 'editar/:id', component: ClientesFormComponent, canDeactivate:[DeactivateGuard], resolve: {cliente: ClienteResolverGuard}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(clientesRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

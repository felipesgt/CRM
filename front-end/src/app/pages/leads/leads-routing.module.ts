import { LeadsListaComponent } from './leads-lista/leads-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateGuard } from './guards/deactivate.guard';
import {LeadsFormComponent} from './leads-form/leads-form.component';
import {LeadsResolverGuard} from './guards/leads-resolver.guard';
import {LeadsAppComponent} from './leads.app.component';

const leadsRoutes: Routes = [
  {path: '', component: LeadsAppComponent,
   children: [
    {path: '', component: LeadsListaComponent},
    {path: 'criar', component: LeadsFormComponent, canDeactivate: [DeactivateGuard], resolve: {leads: LeadsResolverGuard}},
    {path: 'editar/:id', component: LeadsFormComponent, canDeactivate: [DeactivateGuard], resolve: {leads: LeadsResolverGuard}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(leadsRoutes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }

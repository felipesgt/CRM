import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosResolverGuard } from './guards/produtos-resolver.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ProdutosAppComponent } from './produtos.app.component';

const produtosRoutes: Routes = [
  {path: '', component: ProdutosAppComponent, 
  children: [
    {path: '', component: ProdutosListaComponent},
    {path: 'criar', component: ProdutosFormComponent, canDeactivate:[DeactivateGuard], resolve: {produto: ProdutosResolverGuard}},
    {path: 'editar/:id', component: ProdutosFormComponent , canDeactivate:[DeactivateGuard], resolve: {produto: ProdutosResolverGuard}}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(produtosRoutes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

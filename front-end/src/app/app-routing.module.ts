import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: "", redirectTo: '/dashboard', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  {path: "clientes",                              
  loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
  canActivate: [AuthGuard]},
  {path: "produtos",
  loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule),
  canActivate: [AuthGuard]},
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

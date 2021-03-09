import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { ConfirmDialog } from './shared/mat-dialog';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from "ng2-charts";


import { LoginComponent } from './login/login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { PedidosComponent } from './pedidos/pedidos.app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfirmDialog,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    PedidosComponent
  ],

  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],

  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

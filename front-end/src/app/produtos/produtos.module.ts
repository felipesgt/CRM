import { ProdutosService } from './services/produtos.service';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { MaterialModule } from './../shared/material.module';
import { SharedModule } from './../shared/shared.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ProdutosAppComponent } from './produtos.app.component';



@NgModule({
  declarations: [
    ProdutosAppComponent,
    ProdutosListaComponent,
    ProdutosFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ProdutosRoutingModule
  ],
  exports: [
    ProdutosAppComponent,
    ProdutosListaComponent,
    ProdutosFormComponent
  ],
  providers: [
    ProdutosService,
    DeactivateGuard
  ]
})
export class ProdutosModule { }

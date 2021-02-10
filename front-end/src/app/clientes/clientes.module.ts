import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../shared/material.module';
import { ClientesService } from './services/clientes.service';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ClientesAppComponente } from './clientes.app.component';


@NgModule({
  declarations: [
    ClientesListaComponent,
    ClientesAppComponente,
    ClientesFormComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ClientesRoutingModule,
  ],
  
  exports: [
    ClientesAppComponente,
    ClientesListaComponent,
    ClientesFormComponent
  ],
  providers: [
    ClientesService,
    DeactivateGuard
  ]
})
export class ClientesModule { }

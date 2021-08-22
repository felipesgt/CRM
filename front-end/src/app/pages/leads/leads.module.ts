import { LeadsRoutingModule } from './leads-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { LeadsService } from './services/leads.service';
import { LeadsListaComponent } from './leads-lista/leads-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeactivateGuard } from './guards/deactivate.guard';
import { LeadsAppComponent } from './leads.app.component';
import {LeadsFormComponent} from './leads-form/leads-form.component';


@NgModule({
  declarations: [
    LeadsListaComponent,
    LeadsAppComponent,
    LeadsFormComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LeadsRoutingModule,
  ],

  exports: [
    LeadsAppComponent,
    LeadsListaComponent,
    LeadsFormComponent
  ],
  providers: [
    LeadsService,
    DeactivateGuard
  ]
})
export class LeadsModule { }

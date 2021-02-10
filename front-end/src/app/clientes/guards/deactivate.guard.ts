import { ClientesFormComponent } from '../clientes-form/clientes-form.component';
import {  CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class DeactivateGuard implements CanDeactivate<ClientesFormComponent> {
        canDeactivate(
            component: ClientesFormComponent,
        ): boolean {
            if(component.form.dirty && !component.formSaved) {
              return confirm("Deseja perder todas as alterações realizadas?")
            }
            return true;
      }
}

import {  CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import {LeadsFormComponent} from '../leads-form/leads-form.component';

@Injectable()
export class DeactivateGuard implements CanDeactivate<LeadsFormComponent> {
        canDeactivate(
            component: LeadsFormComponent,
        ): boolean {
            if (component.form.dirty && !component.formSaved) {
              return confirm('Deseja perder todas as alterações realizadas?');
            }
            return true;
      }
}

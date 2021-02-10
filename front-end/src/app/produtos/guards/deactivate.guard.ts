import {  CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProdutosFormComponent } from '../produtos-form/produtos-form.component';

@Injectable()
export class DeactivateGuard implements CanDeactivate<ProdutosFormComponent> {
        canDeactivate(
            component: ProdutosFormComponent,
        ): boolean {
            if(component.form.dirty && !component.formSaved) {
              return confirm("Deseja perder todas as alterações realizadas?")
            }
            return true;
      }
}

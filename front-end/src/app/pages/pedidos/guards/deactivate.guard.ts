import { PedidosFormComponent } from '../pedidos-form/pedidos-form.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<PedidosFormComponent> {
  canDeactivate(
    component: PedidosFormComponent): boolean {
    if (component.form.dirty && !component.formSaved) {
      return confirm('Deseja perder todas as alterações realizadas?');
    }
    return true;
  }

}

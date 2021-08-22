import { message } from './../validator-messages';
import {  OnInit, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive()
export abstract class BaseFormComponent implements OnInit {
  form: FormGroup;
  formSaved = false;
  public message = message;

  constructor(
    protected snackBar: MatSnackBar,
  ) { }
  ngOnInit(): void {
  }
  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3500,
  });
}

  public hasError(controlName: string, errorType: string): boolean {
      const formField = this.form.get(controlName);
      return (formField.dirty || formField.touched) && formField.invalid && formField.errors[errorType];
    }

}






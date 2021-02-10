import { message } from './../validator-messages';
import {  OnInit, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive()
export abstract class BaseFormComponent implements OnInit {
  form: FormGroup;
  formSaved: boolean = false;
  public message = message;

  constructor(
    protected snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
  });
}

  hasError(controlName: string, errorType: string) {
      const formField = this.form.get(controlName);
      return (formField.dirty || formField.touched) && formField.invalid && formField.errors[errorType];
    };
  }

 



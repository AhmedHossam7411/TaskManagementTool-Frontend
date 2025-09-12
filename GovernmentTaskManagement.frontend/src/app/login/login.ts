import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form = new FormGroup({
    email : new FormControl('',{
      validators: [Validators.required, Validators.email,],
    }),
    password : new FormControl('',{
      validators: [Validators.required, Validators.minLength(6),],
    }),
  });
  get emailIsInvalid(){
    return this.form.controls.email.invalid 
    && this.form.controls.email.touched
    && this.form.controls.email.dirty;
  }
   get passwordIsInvalid(){
    return this.form.controls.password.invalid 
    && this.form.controls.password.touched
    && this.form.controls.password.dirty;
  }
  onSubmit() 
  {
    console.log(this.form);
  }
}

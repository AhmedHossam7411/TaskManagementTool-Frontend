import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });
  onSubmit() 
  {
    this.form.value.email
  }
}

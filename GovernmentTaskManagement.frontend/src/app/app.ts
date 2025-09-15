import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register } from "./register/register";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Government Task Management Tool';
}

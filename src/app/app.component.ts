import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { DirectivasEjercicio1Component } from './directivas-ejercicio1/directivas-ejercicio1.component';
import { DirectivasEjercicio2Component } from './directivas-ejercicio2/directivas-ejercicio2.component';
import { DirectivasEjercicio3Component } from './directivas-ejercicio3/directivas-ejercicio3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio1Component, DirectivasEjercicio1Component, DirectivasEjercicio2Component, DirectivasEjercicio3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril15Angular';
}

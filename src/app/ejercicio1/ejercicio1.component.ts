import { Component } from '@angular/core';
import { ejercicio1 } from '../_modelo/ejercicio1';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  e1:ejercicio1 = {
    "principal": 0,
    "interestRate": 0
  }
}

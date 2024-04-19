import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directivas-ejercicio3.component.html',
  styleUrl: './directivas-ejercicio3.component.css'
})
export class DirectivasEjercicio3Component {
  generos: string[] = ['Mujer', 'Hombre', 'Otros'];
  nationalitiesList: string[] = ['España', 'México', 'Argentina', 'Chile', 'Colombia'];
  default: string = this.nationalitiesList[0];
  programmingLanguagesList: string[] = ['C++', 'Java', 'JavaScript', 'Python'];
  programas: string[] = [];

  showInformation() {
    console.log('Género:', this.generos);
    console.log('Nacionalidades:', this.nationalitiesList);
    console.log('Lenguajes de Programación:', this.programas);
  }
}

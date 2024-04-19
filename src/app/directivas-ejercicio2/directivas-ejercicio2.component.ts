import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directivas-ejercicio2.component.html',
  styleUrl: './directivas-ejercicio2.component.css'
})
export class DirectivasEjercicio2Component {
  origen: string[] = ["Madrid", "Los Angeles", "Las Vegas", "Tokyo"];
  origenSeleccionado: string = "Madrid";
  destino: string[] = this.origen;
  destinoSeleccionado: string = this.origenSeleccionado;
  fechaDeIda: string[] = ["15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024", "19/04/2024", "20/04/2024", "21/04/2024"];
  idaSeleccionada: string = "15/04/2024";
  fechaDeVuelta: string[] = ["22/04/2024", "23/04/2024", "24/04/2024", "25/04/2024", "26/04/2024", "27/04/2024", "28/04/2024"];
  vueltaSeleccionada: string = "22/04/2024";
  numeroDePasajeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pasajerosSeleccionados: number = 1;

  mostrarInfo() {
    console.log('Origen:', this.origenSeleccionado);
    console.log('Destino:', this.destinoSeleccionado);
    console.log('Fecha de ida:', this.idaSeleccionada);
    console.log('Fecha de vuelta:', this.vueltaSeleccionada);
    console.log('Cantidad de pasajeros:', this.pasajerosSeleccionados);
  }
}

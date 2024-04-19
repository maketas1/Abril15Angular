import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directivas-ejercicio1.component.html',
  styleUrl: './directivas-ejercicio1.component.css'
})
export class DirectivasEjercicio1Component {
  ramOptions: string[] = ['RAM32', 'RAM16', 'RAM8'];
  selectedRam: string = 'RAM8';//Default

  processorOptions: string[] = ['Corei9N8', 'Intel I5'];
  selectedProcessor: string = 'Corei9N8';//Default

  graphicsCardSelected: boolean = false;

  hardDriveOptions: string[] = ['HDD', 'SSD', 'M2'];
  selectedHardDrive: string = 'HDD';//Default

  powerSupply: number = 600;//Default

  //Obtener el resultado
  displayInformation(): void {
    console.log('Selected RAM:', this.selectedRam);
    console.log('Selected Processor:', this.selectedProcessor);
    console.log('Graphics Card Selected:', this.graphicsCardSelected);
    console.log('Selected Hard Drive:', this.selectedHardDrive);
    console.log('Power Supply:', this.powerSupply);
  }
}

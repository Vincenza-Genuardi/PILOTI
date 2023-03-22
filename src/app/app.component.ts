import { Component } from '@angular/core';
import { Pilota } from './pilota/pilota.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  piloti!: Pilota[];
  constructor(){
    this.piloti = [
      {
        "numero": 1,
        "nome": "Verstappen",
        "macchina": "Red Bull"
      },
      {
        "numero": 11,
        "nome": "Perez",
        "macchina": "Red Bull"
      },
      {
        "numero": 16,
        "nome": "Leclerc",
        "macchina": "Ferrari"
      },
      {
        "numero": 55,
        "nome": "Sainz",
        "macchina": "Ferrari"
      },
      {
        "numero": 44,
        "nome": "Hamilton",
        "macchina": "Mercedes"
      },
      {
        "numero": 63,
        "nome": "Russel",
        "macchina": "Mercedes"
      }
   ];

  

  }
}
  

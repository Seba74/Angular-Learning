import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 9000
    }
  ];

  nuevo:Personaje = {
    name: '',
    power: 0
  }

  agregarPersonaje(personaje: Personaje){
    this.personajes.push(personaje);
  }
}

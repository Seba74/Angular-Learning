import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    name: '',
    power: 0
  };

  constructor(private dbzService: DbzService){}
  // @Output() newPersonaje: EventEmitter<Personaje>=  new EventEmitter();
  agregar(){
    if(this.nuevo.name.trim().length === 0){
      return;
    }
    // this.newPersonaje.emit(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      name: '',
      power: 0
    }
  }
}
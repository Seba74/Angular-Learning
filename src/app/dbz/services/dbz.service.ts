import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 9000
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];
      }
    constructor(){}

    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
 heroes: string[] = ['Spiderman', "Ironman", "Superman", "Thor", "Ben"];
 heroeBorrado:string = '';
 borrarHeroe()  {
   this.heroeBorrado = this.heroes.pop() || '';
  }
}

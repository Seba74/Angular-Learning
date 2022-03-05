import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}} </h1>
    
        <button (click)="acumular(-base)"> - 5</button>
        <span> {{numero}} </span>
        <button (click)="acumular(base)"> + 5</button>
    `,
    styleUrls: ['contador.component.scss'] 
})
export class ContadorComponent {
    title: string =  'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number) {
       this.numero += valor;
    } 
}
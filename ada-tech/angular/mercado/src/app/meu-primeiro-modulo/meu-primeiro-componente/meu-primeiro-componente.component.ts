import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponenteComponent {

  public lastName: string = '';
  public name: string = '';

  actionBtn1 () {
    this.name = 'Raissa';
    this.lastName = 'Oliveira';
  }

  public year: number = 2024;

  acrescentarAno () {
    this.year++;
  }

  decrescerAno () {
    this.year--;
  }


}

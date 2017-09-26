import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo07',
  templateUrl: './ejemplo07.component.html',
  styleUrls: ['./ejemplo07.component.css']
})
export class Ejemplo07Component implements OnInit {
  numeros: number[];
  frutas: string[];
  numero: number;
  fruta: string;

  constructor() { }

  ngOnInit() {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
  }

  insertaNumero(){
    this.numeros.push(this.numero);
    this.numero = null;
  }

  insertaFruta() {
    this.frutas.push(this.fruta);
    this.fruta = null; // limpia el input
  }

}

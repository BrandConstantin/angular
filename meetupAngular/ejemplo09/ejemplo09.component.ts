import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo09',
  templateUrl: './ejemplo09.component.html',
  styleUrls: ['./ejemplo09.component.css']
})
export class Ejemplo09Component implements OnInit {

  temperatura;

  constructor() { }

  ngOnInit() {
    this.temperatura = Math.floor(Math.random() * 20 + 1);
  }

  incrementaValor(incremento: number) {
    this.temperatura += incremento;
  }
}

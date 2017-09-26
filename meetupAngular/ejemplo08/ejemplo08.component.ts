import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { listaEmpleados } from '../lista-empleados';

@Component({
  selector: 'app-ejemplo08',
  templateUrl: './ejemplo08.component.html',
  styleUrls: ['./ejemplo08.component.css']
})
export class Ejemplo08Component implements OnInit {
  
    empleados: Empleado[];
  
    constructor() {
      this.empleados = listaEmpleados;
    }
  
    ngOnInit() {
    }
  
  }

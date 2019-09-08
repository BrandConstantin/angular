import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'listado',
    templateUrl: `./listado.component.html`
})

export class ListadoComponent {
    public listado: Array<string>;
    public nombre: string;
    public malo: string;
    public bueno: string;
    public diferencia: boolean;
    public color: string;

    constructor(){
        this.nombre = 'Listado de e-Aditivos';
        this.malo = 'CANGERIGENOS';
        this.bueno = 'COLORANTES INOFENSIVOS';
        this.diferencia = true;
        this.color = 'red';
        this.listado =  ['E-100', 'E-101', 'E-102', 'E-104', 'E-106'];
    }
}

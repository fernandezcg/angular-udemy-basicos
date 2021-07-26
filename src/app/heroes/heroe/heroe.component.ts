import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad:number = 45;

    get nombreCap(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiaNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiaEdad(): void {
        this.edad = 30;
    }
}

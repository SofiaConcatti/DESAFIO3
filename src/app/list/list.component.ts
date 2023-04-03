import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  alumnos = [
    { nombre: 'Luis', apellido: 'Salinas' },
    { nombre: 'Sofia', apellido: 'Concatti' },
    { nombre: 'Josue', apellido: 'Baez' },
  ];
  mostrarLista = false;
  mostrarAlumnos() {
    this.mostrarLista = true;
  }
}

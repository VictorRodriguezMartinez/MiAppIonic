import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  opcionSeleccionada: string;

  constructor() { }

  ngOnInit() {
  }

  asignarOpcion(opcion) {
    this.opcionSeleccionada = opcion;
    console.log(this.opcionSeleccionada);

    this.cerrarNavBar();

  }

  cerrarNavBar() {
    document.getElementById('botonMenu').click();
  }

}

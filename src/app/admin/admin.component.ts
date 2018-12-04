import { Component, OnInit, ViewChild  } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { Usuario } from '../mock-usuarios';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  opcionSeleccionada: string;
  @ViewChild(UsuarioComponent) usuarioComponente: UsuarioComponent;

  constructor() { }

  ngOnInit() {
  }

  asignarOpcion(opcion) {
    if (this.opcionSeleccionada) {
      this.usuarioComponente.limpiarUsuario();
    }
    this.opcionSeleccionada = opcion;
    console.log(this.opcionSeleccionada);

    this.cerrarNavBar();
  }

  cerrarNavBar() {
    document.getElementById('botonMenu').click();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { MiServicioService } from '../../mi-servicio.service';
import { Usuario, USUARIOS } from '../../mock-usuarios';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  @Input() opcionUsuario: string;
  // terminoBusqueda: boolean;
  usuarios = USUARIOS;
  usuariosFiltrados: Usuario[];
  constructor(
    public userService: MiServicioService
  ) { }

  ngOnInit() {
  }



  buscarUsuario (termino: string): Usuario[] {
    console.log(termino);
    // this.terminoBusqueda = true;

    termino = termino.toLowerCase();
    this.usuariosFiltrados = new Array<Usuario> ();

    for ( let usuario of this.usuarios) {
      let nombre = usuario.nombre.toLowerCase();

      if ( nombre.indexOf( termino ) >= 0 ) {
        this.usuariosFiltrados.push( usuario );
      }
    }

    return this.usuariosFiltrados;
  }

  accionUsuario() {
    switch (this.opcionUsuario) {
      case 'usuarioVer':
      // console.log(this.terminoBusqueda);
      console.log(this.usuarios);
      // return this.usuarios;
      break;

      case 'usuarioAnadir':
        console.log('response');
      break;

      case 'usuarioAnadirTrabajo':

      break;

      case 'usuarioModificar':

      break;

      case 'usuarioBorrar':

      break;

    }
  }

}

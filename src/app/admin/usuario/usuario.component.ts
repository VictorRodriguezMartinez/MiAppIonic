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
  usuarioSeleccionado: Usuario;

  constructor(
    public userService: MiServicioService
  ) { }

  ngOnInit() {
  }

  public limpiarUsuario() {
    this.usuarioSeleccionado = null;
    this.usuariosFiltrados = null;
  }



  getUsuarioPorNombre (termino: string): Usuario[] {
    console.log(termino);
    // this.terminoBusqueda = true;

    termino = termino.toLowerCase();
    this.usuariosFiltrados = new Array<Usuario> ();

    for ( const usuario of this.usuarios) {
      const nombre = usuario.nombre.toLowerCase();

      if ( nombre.indexOf( termino ) >= 0 ) {
        this.usuariosFiltrados.push( usuario );
      }
    }
    this.usuarioSeleccionado = null;
    return this.usuariosFiltrados;
  }
  cargarDatosUsuario (usuario: Usuario) {
    this.usuarioSeleccionado = usuario;
    this.usuariosFiltrados = new Array<Usuario> ();
  }

  // INSERT USUARIO
  anadirUsuario (nombre, apellidos, email, contrasena) {
    this.userService.anadirUsuario(nombre, apellidos, email, contrasena).subscribe(response => {
    console.log(response);
    console.log(response['response']);
    if (  response['response'] ) {
      localStorage.setItem('usuario', JSON.stringify(response['usuario']));
    }
    });
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

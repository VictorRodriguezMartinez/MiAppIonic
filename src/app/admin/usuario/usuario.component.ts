import { Component, OnInit, Input } from '@angular/core';
import { MiServicioService } from '../../mi-servicio.service';
import { Usuario, USUARIOS, Trabajo } from '../../mock-usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  @Input() opcionUsuario: string;
  usuarios: Usuario[];
  usuariosFiltrados: Usuario[];
  usuarioSeleccionado: Usuario;
  trabajos: Trabajo[];

  constructor(
    public userService: MiServicioService
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  public limpiarUsuario() {
    this.usuarioSeleccionado = null;
    this.usuariosFiltrados = null;
  }

  getUsuarioPorNombre (termino: string): Usuario[] {
    console.log(termino);

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

getUsuarios() {
  this.userService.obtenerUsuarios().subscribe(response => {
    console.log(response);
    this.usuarios = response['usuarios'];
  });
}

  // Asigna valor a variable usuarioSeleccionado
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
  getTrabajos () {
    this.userService.getTrabajos().subscribe(response => {
      console.log(response);
      this.trabajos = response['trabajos'];
      console.log(this.trabajos);
    });
    // this.trabajos = this.userService.getTrabajos();
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

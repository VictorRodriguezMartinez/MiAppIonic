import { Component, OnInit, Input } from '@angular/core';
import { MiServicioService } from '../../mi-servicio.service';
import { Usuario, USUARIOS, Trabajo } from '../../mock-usuarios';
import { AlertController } from '@ionic/angular';
// import * as $ from 'jquery';
// declare var $: any;
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
    public userService: MiServicioService,
    public alertController: AlertController
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
     return;
  }
  limpiarUsuariosFiltradosInicializar () {
    this.usuariosFiltrados = new Array<Usuario> ();

  }
  limpiarUsuariosFiltrados () {
    this.usuariosFiltrados = null;
  }
  limpiarTrabajos () {
    this.trabajos = null;
  }
  cargarDatosUsuarioLimpiarFiltrados (usuario: Usuario) {
    this.usuarioSeleccionado = usuario;
    this.usuariosFiltrados = null;
 }

  // INSERT USUARIO
  // Usuario->Añadir
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

  getTrabajosTotales () {
    this.userService.getTrabajos().subscribe(response => {
      console.log(response);
      this.trabajos = response['trabajos'];
      console.log(this.trabajos);
    });
  }
  getTrabajosUsuario (trabajosAsignados, idUsuario) {
    this.userService.getTrabajosUsuario(trabajosAsignados, idUsuario).subscribe(response => {
      console.log(response);
      this.trabajos = response['trabajos'];
      console.log(this.trabajos);
    });
  }

  async presentAlert(header_, subheader_, message_, button_) {
    const alert = await this.alertController.create({
      header: header_, // alert
      subHeader: subheader_, // subtitle
      message: message_, // mensaje
      buttons: [button_] // OK
    });

    await alert.present();
  }

  anadirTrabajoUsuario(usuarioSeleccionadoId, trabajoId) {
    this.userService.addTrabajoUsuario(usuarioSeleccionadoId, trabajoId).subscribe(response => {
    // console.log(response['response']);
      // if (response['response']) {
      //   // mensaje correcto
      //   this.presentAlert('Datos guardados', 'Se acaba de asignar el trabajo al usuario', '', 'ok');
      // } else {
      //   // mensaje error
      //   this.presentAlert('Error', 'Se ha producido un error al guardar los datos', '', 'ok');
      // }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Trabajo, Usuario } from '../mock-usuarios';

import { MiServicioService } from '../mi-servicio.service';

import { AlertController } from '@ionic/angular';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jornadaContinua = true;
horaInicioManana: string  ;
horaFinManana: string;
idTrabajo: number;
fecha = new Date().toISOString();
comentario = '';

horaInicioTarde: string;
horaFinTarde: string;

trabajos: Trabajo[];
usuario: Usuario;
trabajo: Trabajo;

resultado: any;

// registerForm: FormGroup;
// submitted = false;

  constructor(
    public userService: MiServicioService,
    public alertController: AlertController,
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getUsuario();
    this.getTrabajosUsuario(true, this.usuario.id);
  }





  getTrabajosUsuario (trabajosAsignados, idUsuariod) {
  // recuperar trabajos con llamada a servicio
  this.userService.getTrabajosUsuario(true, this.usuario.id).subscribe(response => {
    console.log(response);
    this.trabajos = response['trabajos'];
    console.log(this.trabajos);
  });
  }

// insert dia_trabajo
  ficharDiaUsuario () {
    this.userService.insertDiaTrabajo (this.jornadaContinua, this.horaInicioManana, this.horaFinManana,
      this.trabajo.id, this.usuario.id, this.fecha, this.comentario).subscribe(response => {
        this.resultado = response['response'] ;
      if (this.resultado) {
        console.log();
      } else {
        console.log();
        this.presentAlert();
      }

      });

    // console.log(this.trabajo.id, this.usuario.id,
    //   this.fecha,
    //   this.jornadaContinua, this.horaInicioManana, this.horaFinManana,
    //   this.horaInicioTarde, this.horaFinTarde );
  }

  // asignacion a objeto trabajo en el select-option de trabajos
  asignarTrabajo (trabajoSeleccionado) {
  this.trabajo = trabajoSeleccionado;
  }

  // se recoge el objeto guardado en localStorage, se parsea y se asigna a nustro
  // objeto usuario: Usuario
  getUsuario () {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

}

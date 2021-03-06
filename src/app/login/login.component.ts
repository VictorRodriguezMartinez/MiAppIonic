import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';
import { RouterModule, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  miObjeto: any;
  array;
  redireccion: string;

  constructor(
    public userService: MiServicioService,
    public routerModule: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }


x() {
  this.userService.obtenerUsuarios().subscribe(response => {
    console.log(response);
    // this.miObjeto.gender = response[0].gender;
    // this.miObjeto.nameFirst = response[0].name.first;
    // let x = JSON.parse(response);
    this.array  = response['results'];
    console.log(this.array);

    console.log(this.miObjeto);
    sessionStorage.setItem('a', JSON.stringify(this.array));
    });
}
login (usuario, contrasena) {
  this.userService.login(usuario, contrasena).subscribe(data => {
     console.log(data);
     if ( data['response'] === true ) {
      console.log('aaaa');
      localStorage.setItem('usuario', JSON.stringify(data['usuario']));
      if ( data['usuario']['rol'] === 'admin' ) {
        this.routerModule.navigate(['admin']);
       } else if (data['usuario']['rol'] === 'worker') {
        this.routerModule.navigate(['home']);
       }

      // this.routerModule.navigate(['admin']);
     } else {
      this.presentAlert('ERROR', 'Error de entrada', 'Usuario o contraseña incorrectos.', 'OK');
     }
   });
  //  let response = this.userService.login(usuario, contrasena);
  //  console.log(response.[resultado]);
  //  if (response['resultado']) {
  //    sessionStorage.setItem('usuario', usuario);
  //  }
}

async presentAlert(header, subHeader, message, button) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }



}


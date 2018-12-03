import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';
import { RouterModule, Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
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

  emailUsuario: string;
  contrasenaUsuario: string;

  emailControl: FormControl;
  passControl: FormControl;
  loginForm;


  constructor(
    public userService: MiServicioService,
    public routerModule: Router,
    public fb: FormBuilder,
    public alertController: AlertController
    ) {
      this.emailControl = new FormControl ('',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[^ @]*@[^ @]*')
      ]));
      this.passControl = new FormControl('', Validators.compose([ Validators.required, Validators.minLength(2)] ));
      this.loginForm = this.fb.group({
        email: this.emailControl,
        contrasena: this.passControl
      });

  }

  ngOnInit() {
  }

  onSubmit() {
  this.login();
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
login () {
  this.userService.login(this.loginForm.controls.email.value, this.loginForm.controls.contrasena.value).subscribe(data => {
     console.log(data);
     console.log(this.loginForm);
     console.log(this.emailControl);
     if ( data['response'] ) {
      console.log('aaaa');
      localStorage.setItem('usuario', JSON.stringify(data['usuario']));
      if ( data['usuario']['rol'] === 'admin' ) {
        this.routerModule.navigate(['admin']);
       } else {
        this.routerModule.navigate(['home']);
       }
      // this.routerModule.navigate(['admin']);
     } else {
       console.log(this.loginForm.controls.email.value, this.loginForm.controls.contrasena.value);
      this.presentAlert('Error', '', 'Usuario o contraseña incorrectos', 'OK');
     }
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




}


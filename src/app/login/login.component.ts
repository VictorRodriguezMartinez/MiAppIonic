import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  miObjeto: any;
  array;

  constructor(
    public userService: MiServicioService
  ) { }

  ngOnInit() {
  }


x() {
  this.userService.getUsers().subscribe(response => {
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





}


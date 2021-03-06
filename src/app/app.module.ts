import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MiServicioService } from './mi-servicio.service';
import { AdminComponent } from './admin/admin.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { TrabajoComponent } from './admin/trabajo/trabajo.component';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './admin/listado/listado.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent, UsuarioComponent, TrabajoComponent, HomeComponent, ListadoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, NgbModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MiServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

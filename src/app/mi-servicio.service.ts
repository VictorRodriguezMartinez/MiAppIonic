import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USUARIOS, TRABAJOS } from './mock-usuarios';
@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(
    private http: HttpClient
  ) { }

// getUsers() {
//   return this.http.get('https://randomuser.me/api/?results=2');
// }

obtenerUsuarios () {
  // console.log(USUARIOS);
  return this.http.get('http://localhost/api/v1/usuarios.php');
  // return USUARIOS;
}

// comprobar que coincide el termino de busqueda con nombre, apellidos, email, o dni
verUsuario(terminoBusqueda) {
  console.log('aa');
}

// añadir usuario con datos del mismo pasados por parametro
anadirUsuario(nombre, apellidos, email, contrasena) {
  return this.http.post('http://localhost/api/v1/usuario.php?email=' + email
  + '&contrasena=' + contrasena
  + '&nombre=' + nombre
  + '&apellidos=' + apellidos, '');
}

getTrabajoPorNombre(terminoBusqueda) {
  return TRABAJOS;
}

getTrabajos () {
  return this.http.get('http://localhost/api/v1/trabajos.php');
}

// se debe mostrar el usuario y posteriormente los trabajos que tiene asignados
anadirTrabajo(nombre, descripcion) {
  return this.http.post('http://localhost/api/v1/trabajo.php?nombre=' + nombre +
  '&descripcion=' + descripcion, '');
}

// modificar usuario
modificarUsuario() {

}

// borrar usuario
borrarUsuario () {

}

login (usuario, contrasena) {
  // return this.http.get('http://localhost/api/v1/usuario.php?usuario=' + usuario + '&contrasena=' + contrasena);
  // console.log(this.http.get('http://localhost/api/v1/usuario.php?email=admin@admin.com&contrasena=123'));

  return this.http.get('http://localhost/api/v1/usuario.php?usuario=' + usuario + '&contrasena=' + contrasena);

}

}

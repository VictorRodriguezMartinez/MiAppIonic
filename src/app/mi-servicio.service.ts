import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USUARIOS, TRABAJOS, Usuario } from './mock-usuarios';
@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(
    private http: HttpClient
  ) { }

  usuario: Usuario;

obtenerUsuarios () {
  return this.http.get('http://localhost/api/v1/usuarios.php');
}

// añadir usuario con datos del mismo pasados por parametro
anadirUsuario(nombre, apellidos, email, contrasena) {
  return this.http.post('http://localhost/API_Project/operaciones.php?operacion=iu&email=' + email
  + '&contrasena=' + contrasena
  + '&nombre=' + nombre
  + '&apellidos=' + apellidos, '');
}

getTrabajoPorNombre(terminoBusqueda) {
  return TRABAJOS;
}

// get todos los trabajos
getTrabajos () {
  // return this.http.get('http://localhost/api/v1/trabajos.php');
  return this.http.get('http://localhost/API_Project/operaciones.php?operacion=gt');
}

// trabajosAsignados->true/false: dependiendo si queremos los trabajos del usuario o los que no tiene asignados
// id->se necesita el id de usuario para hacer la consulta respecto a sus trabajos
getTrabajosUsuario (trabajosAsignados: boolean, idUsuario: number) {
  // return this.http.get('http://localhost/api/v1/trabajosUsuario.php?trabajosAsignados=' + trabajosAsignados + '&idUsuario=' + idUsuario);
  // tslint:disable-next-line:max-line-length
  return this.http.get('http://localhost/API_Project/operaciones.php?operacion=gtu&trabajosAsignados=' + trabajosAsignados + '&idUsuario=' + idUsuario);
}

// se debe mostrar el usuario y posteriormente los trabajos que tiene asignados
anadirTrabajo(nombre, descripcion) {
  // return this.http.post('http://localhost/api/v1/trabajo.php?nombre=' + nombre +
  // '&descripcion=' + descripcion, '');
  return this.http.post('http://localhost/API_Project/operaciones.php?operacion=it&nombre=' + nombre +
  '&descripcion=' + descripcion, '');
}

// modificar usuario
modificarUsuario() {
  // guardar en base de datos

  // guardar en localStorage

}

// borrar usuario
borrarUsuario () {

}

login (usuario, contrasena) {
  // return this.http.get('http://localhost/api/v1/usuario.php?usuario=' + usuario + '&contrasena=' + contrasena);
  return this.http.get('http://localhost/API_Project/operaciones.php?operacion=lg&usuario=' + usuario + '&contrasena=' + contrasena);
}

addTrabajoUsuario (idUsuario, idTrabajo) {
  // return this.http.post('http://localhost/api/v1/trabajosUsuario.php?idUsuario=' + idUsuario + '&idTrabajo=' + idTrabajo , '');
  // tslint:disable-next-line:max-line-length
  return this.http.post('http://localhost/API_Project/operaciones.php?operacion=atu&idUsuario=' + idUsuario + '&idTrabajo=' + idTrabajo , '');
}

insertDiaTrabajo (jornadaContinua, horaInicioManana, horaFinManana,
  idTrabajo, idUsuario, fecha, comentario?, horaInicioTarde?, horaFinTarde?) {

  if ( jornadaContinua ) {
    console.log('http://localhost/API_Project/operaciones.php?operacion=tfd&idUsuario=' + idUsuario +
    '&idTrabajo=' + idTrabajo +
    '&jornadaContinua=' + jornadaContinua +
    '&horaInicioManana=' + horaInicioManana +
    '&horaFinManana=' + horaFinManana +
    '&comentario=' + comentario +
    '&fecha=' + fecha);
    return this.http.post('http://localhost/API_Project/operaciones.php?operacion=tfd&idUsuario=' + idUsuario +
  '&idTrabajo=' + idTrabajo +
  '&jornadaContinua=' + jornadaContinua +
  '&horaInicioManana=' + horaInicioManana +
  '&horaFinManana=' + horaFinManana +
  '&comentario=' + comentario +
  '&fecha=' + fecha , '');
  } else {
    return this.http.post('http://localhost/API_Project/operaciones.php?operacion=tfd&idUsuario=' + idUsuario +
  '&idTrabajo=' + idTrabajo +
  '&jornadaContinua=' + jornadaContinua +
  '&horaInicioManana=' + horaInicioManana +
  '&horaFinManana=' + horaFinManana +
  '&comentario=' + comentario +
  '&fecha=' + fecha +
  '&horaInicioTarde=' + horaInicioTarde +
  '&horaFinTarde=' + horaFinTarde, '');
  }
}

}

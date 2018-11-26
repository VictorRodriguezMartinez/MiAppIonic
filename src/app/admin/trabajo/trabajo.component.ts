import { Component, OnInit, Input } from '@angular/core';
import { MiServicioService } from '../../mi-servicio.service';
import { TRABAJOS, Trabajo } from 'src/app/mock-usuarios';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss']
})
export class TrabajoComponent implements OnInit {
  @Input() opcionUsuario: string;

  trabajos = TRABAJOS;
  trabajosFiltrados: Trabajo[];
  trabajoSeleccionado: Trabajo;

  constructor(public userService: MiServicioService) {}

  ngOnInit() {}
  // INSERT TRABAJO
  addTrabajo(nombre, descripcion) {
    this.userService.anadirTrabajo(nombre, descripcion).subscribe(response => {
      // console.log(response);
      // console.log(response["response"]);
      // if (response["response"]) {
      //   localStorage.setItem("usuario", JSON.stringify(response["usuario"]));
      // }
    });
  }

  getTrabajoPorNombre(termino) {
    // this.userService.getTrabajoPorNombre(termino).subscribe(response => {
    console.log(termino);
    // this.terminoBusqueda = true;

    termino = termino.toLowerCase();
    this.trabajosFiltrados = new Array<Trabajo>();

    for (const trabajo of this.trabajos) {
      const nombre = trabajo.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        this.trabajosFiltrados.push(trabajo);
      }
    }
    this.trabajoSeleccionado = null;
    return this.trabajosFiltrados;
    // });
  }
  cargarDatosTrabajo(trabajo: Trabajo) {
    this.trabajoSeleccionado = trabajo;
    this.trabajosFiltrados = new Array<Trabajo>();
  }
}

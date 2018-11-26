export class Usuario {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  contrasena: string;
  rol: string;
}
export class Trabajo {
  id: number;
  nombre: string;
  descripcion: string;
}
export const USUARIOS: Usuario[] = [
  {
    'id': 1,
    'nombre': 'Juan Ramon',
    'apellidos': 'lopez',
    'email': 'juan@contacto.com',
    'contrasena': '123',
    'rol': 'worker'
  },
  {
    'id': 2,
    'nombre': 'Ramon',
    'apellidos': 'muñoz',
    'email': 'Ramon@contacto.com',
    'contrasena': '123',
    'rol': 'worker'
  }
];

export const TRABAJOS: Trabajo[] = [
  {
    'id': 1,
    'nombre': 'Trabajo asd',
    'descripcion': 'sdasda sadasdsa dasd sad ad assd adsad asd sa',
  },
  {
    'id': 2,
    'nombre': 'Trabajo asdsd',
    'descripcion': 'sdf ghsdsddsthtfd dfgd fgdfg hjyth th yhthtyh tyhty sd',
  }
];

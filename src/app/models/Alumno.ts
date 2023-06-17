export class Alumno {
  cedula: string;
  nombre: string;
  apellido: string;
  edad: number;
  fechaNacimiento: Date;


  constructor(
    cedula: string,
    nombre: string,
    apellido: string,
    edad: number,
    fechaNacimiento: Date,
  ) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fechaNacimiento = fechaNacimiento;
  }

}

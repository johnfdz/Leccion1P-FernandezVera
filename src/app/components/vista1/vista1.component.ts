import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
  nombre: string = '';
  apellido = '';
  cedula = '';
  edad = '';
  fechaNacimiento = new Date('');

  activeTab: string = 'tab1';

  changeTab(tab: string) {
    this.activeTab = tab;
  }

  listEliminados: Alumno[] = [];

  listAlumnos: Alumno[] = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      cedula: '1234567890',
      edad: 20,
      fechaNacimiento: new Date('1990-06-15'),
    },
    {
      nombre: 'Maria',
      apellido: 'Gonzalez',
      cedula: '0987654321',
      edad: 20,
      fechaNacimiento: new Date('1990-06-15'),
    },
    {
      nombre: 'Pedro',
      apellido: 'Gomez',
      cedula: '1234567890',
      edad: 20,
      fechaNacimiento: new Date('1990-06-15'),
    },
    {
      nombre: 'Ana',
      apellido: 'Perez',
      cedula: '0987654321',
      edad: 20,
      fechaNacimiento: new Date('1990-06-15'),
    },
    {
      nombre: 'Jose',
      apellido: 'Gonzalez',
      cedula: '1234567890',
      edad: 20,
      fechaNacimiento: new Date('1990-06-15'),
    },
  ];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  agregarAlumno(): void {
    const alumno: Alumno = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      edad: parseInt(this.edad),
      fechaNacimiento: this.fechaNacimiento,
    }

    this.listAlumnos.push(alumno);


    this.nombre = '';
    this.apellido = '';
    this.cedula = '';
    this.edad = '';
    this.fechaNacimiento = new Date('');
  }

  eliminarAlumno(indice: number): void {
    this.listEliminados.push(this.listAlumnos[indice]);
    this.listAlumnos.splice(indice, 1);
  }


}
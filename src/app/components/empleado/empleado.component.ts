import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { SEmpleadosService } from 'src/app/services/s-empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

 
  mensaje: string =''
  resgistrado = false;
  listaEmpleados: Empleado[] = [
    new Empleado ('Pepe', 'Grillo', 'Presidente', 7000),
    new Empleado ('Ana', 'Perez', 'Directora', 4500),
    new Empleado ('Juan', 'Guitierres', 'Administrativo', 2500)
  ];
  
    constructor(private SEmpleadosService: SEmpleadosService){

     }

  ngOnInit(): void { }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.listaEmpleados.push(miEmpleado);
    this.resgistrado=true;
    this.SEmpleadosService.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);

  }

 

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);

  }
}

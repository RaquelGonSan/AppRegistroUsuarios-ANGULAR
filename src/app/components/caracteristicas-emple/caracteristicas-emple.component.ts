import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-emple',
  templateUrl: './caracteristicas-emple.component.html',
  styleUrls: ['./caracteristicas-emple.component.css']
})
export class CaracteristicasEmpleComponent implements OnInit{

  @Output() caracteristicasEmple = new EventEmitter<string>();

  constructor(){


  }

  ngOnInit(): void {
    
  }

  addCaracteristicas(value:string){
    this.caracteristicasEmple.emit(value);
  }
}

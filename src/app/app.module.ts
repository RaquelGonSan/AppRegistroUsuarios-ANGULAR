import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './components/empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleComponent } from './components/caracteristicas-emple/caracteristicas-emple.component';
import { SEmpleadosService } from './services/s-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

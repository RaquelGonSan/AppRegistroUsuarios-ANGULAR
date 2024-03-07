import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleComponent } from './caracteristicas-emple.component';

describe('CaracteristicasEmpleComponent', () => {
  let component: CaracteristicasEmpleComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasEmpleComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasEmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDetalleComponent } from './ejercicio-detalle.component';

describe('EjercicioDetalleComponent', () => {
  let component: EjercicioDetalleComponent;
  let fixture: ComponentFixture<EjercicioDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioDetalleComponent]
    });
    fixture = TestBed.createComponent(EjercicioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

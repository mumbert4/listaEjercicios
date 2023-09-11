import { Component, Input } from '@angular/core';
import { Ejercicio } from '../ejercicio';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.scss']
})
export class EjercicioDetalleComponent {
  @Input() ejercicio!: Ejercicio;

}

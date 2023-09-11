import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss']
})
export class EjerciciosComponent implements OnInit {
  
  
  ejercicios: Ejercicio[];
  ejercicioSeleccionado: Ejercicio;

  constructor(private ejercicioService : EjercicioService){}

  
  getEjercicios_old(){ // aixi es sincron
    // this.ejercicios= this.ejercicioService.getEjercicios();
  }

  getEjercicios(){ // aixi es asincron
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>{
      this.ejercicios= ejercicios;
    })
  }
  
  ngOnInit(): void {
    console.log("Ejercicios ngOnInit")
    this.getEjercicios();
  }
  onSelectEjercicio(ejercicio: Ejercicio){
    console.log("Ejercicio seleccionado = " + ejercicio.id);
    this.ejercicioSeleccionado= ejercicio;
  }

}

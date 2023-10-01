import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit{
  ejercicios: Ejercicio[];
  constructor(private ejercicioService:EjercicioService){
      console.log(" Panel creat");
  }
  ngOnInit(): void {
    console.log(" ---ngOninit Panel");
    this.getEjercicios();
  }


  getEjercicios(){ // aixi es asincron
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>{
      this.ejercicios= ejercicios
    })
  }

}

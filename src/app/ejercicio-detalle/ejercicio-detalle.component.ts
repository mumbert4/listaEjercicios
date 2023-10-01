import { Component, Input, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import { ActivatedRoute } from '@angular/router';
import { EjercicioService } from '../ejercicio.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.scss']
})
export class EjercicioDetalleComponent implements OnInit{
  ejercicio: Ejercicio;

  constructor(private route:ActivatedRoute, 
              private ejercicioService:EjercicioService, 
              private location:Location){
  }
  ngOnInit(): void {
    this.getEjercicio();
  }

  getEjercicio(){
      const id =+ this.route.snapshot.paramMap.get('id');
      this.ejercicioService.getEjercicio(id).subscribe(ejercicio=>this.ejercicio=ejercicio)
      
    }

  goBack(){
    this.location.back();
  }
}

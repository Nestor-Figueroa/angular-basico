import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { outputAst } from '@angular/compiler';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{


  @Input() nuevo: Personaje ={
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService){
      
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevo.nombre.trim().length ===0){return;}

    //this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}

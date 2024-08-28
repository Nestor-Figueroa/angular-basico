import { Component, OnInit } from '@angular/core';
//import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: 'Maestro shifu',
    poder: 200,
  };

  constructor(  ){}
}

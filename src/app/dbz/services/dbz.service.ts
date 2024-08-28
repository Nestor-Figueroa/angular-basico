import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

    private _persojanes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 1500
        },
        {
          nombre: 'Vegeta',
          poder: 1200
        }
      ]

      get personajes(): Personaje[]{
        return [...this._persojanes];
      }

    constructor(){}

    agregarPersonaje(personaje:Personaje){
        this._persojanes.push(personaje);
    }


}
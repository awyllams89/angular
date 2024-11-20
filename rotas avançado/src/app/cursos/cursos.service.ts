import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): any[]{
    return [
      { id:1,nome:'angular 2'},
      { id:2,nome:'angular cursos'}
    ]
  }

  getCurso(id:number){
    const itens = this.getCursos().find(item => item.id == id);
    console.log(itens);
    return itens;
  }
}

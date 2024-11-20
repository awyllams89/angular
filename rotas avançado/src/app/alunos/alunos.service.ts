import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos(): any[]{
    return [
      { id:1,nome:'Allan Borges', email:'allan@allan.com'},
      { id:2,nome:'Rayane Borges', email:'ray@ray.com'}
    ]
  }

  getAluno(id:number){
    const itens = this.getAlunos().find(item => item.id == id);
    return itens;
  }
}

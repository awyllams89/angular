import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../login/auth.service';
import { Aluno } from '../models/aluno';
import { AlunosService } from '../alunos.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService:AlunosService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Aluno | Observable<Aluno> | Promise<Aluno> {
    console.log('AlunoDetalheResolver')
    let id = route.params['id'];
    return this.alunosService.getAluno(id);
  }




}

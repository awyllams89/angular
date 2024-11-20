import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../login/auth.service';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  constructor(private authService: AuthService, private router: Router) { }
  canDeactivate(component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('guarda de desativação')
    return component.podeDesativar();
  }

}

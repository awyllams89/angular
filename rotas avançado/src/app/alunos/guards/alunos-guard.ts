import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('AlunosGuard');
    if(state.url.includes('editar')){
      // alert('usuario sem acesso')
      // return false;
    }

    return true;

  }
}

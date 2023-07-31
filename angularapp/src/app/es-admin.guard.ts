import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SeguridadService } from './seguridad/seguridad.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//export const esAdminGuard: CanActivateFn = (route, state) => {
export class esAdminGuard implements CanActivate {
  constructor(private seguridadService: SeguridadService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.seguridadService.obtenerRol() === 'admin') {
      return true;
    }
    this.router.navigate(['']);
    return false;

    }
}

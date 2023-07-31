import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor() { }

  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';

  estaLogueado(): boolean {
    const token = localStorage.getItem(this.llaveToken);

    if (!token) { return false; }

    const expiracion = localStorage.getItem(this.llaveExpiracion);
    const expiracionFecha = new Date(expiracion!);
    if (expiracionFecha <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  logout() {
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  //obtenerRol(rol: string): string {
  obtenerRol(): string {
    return 'admin';
    //return '';
  }

}

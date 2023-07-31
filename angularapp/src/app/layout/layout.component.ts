import { Component } from '@angular/core';
import { SeguridadService } from '../seguridad/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private seguridadService: SeguridadService, private router: Router) { }

  salirTiendas() {
    this.seguridadService.logout();
    this.router.navigate(['']);
  }
}

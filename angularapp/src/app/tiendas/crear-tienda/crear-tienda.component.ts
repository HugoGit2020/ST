import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tiendaCreacionDTO, tiendaCreacionDTO2 } from '../tienda';
import { TiendasService } from '../tiendas.service';

@Component({
  selector: 'app-crear-tienda',
  templateUrl: './crear-tienda.component.html',
  styleUrls: ['./crear-tienda.component.css']
})
export class CrearTiendaComponent {
  constructor(private router: Router, private tiendasService: TiendasService) {
  }

  guardarCambios(tienda: tiendaCreacionDTO) {
    this.tiendasService.crear(tienda).subscribe(() => {
      this.router.navigate(['/tienda']);
    }, error => console.error(error));    
  }
  
}

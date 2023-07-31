import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { articuloCreacionDTO } from '../articulo';
import { ArticulosService} from '../articulos.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent {
  constructor(private router: Router, private articulosService: ArticulosService) { }

  guardarCambios(articulo: articuloCreacionDTO) {
    this.articulosService.crear(articulo).subscribe(() => {
      this.router.navigate(['/articulo']);
    }, error => console.error(error));    
  }
}

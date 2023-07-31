import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { articuloCreacionDTO, articuloDTO } from '../articulo';
import { parsearErroresAPI } from '../../utilidades/utilidades';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit{
  constructor(private router: Router, private articuloService: ArticulosService,
    private activatedRoute: ActivatedRoute) { }

  modelo: articuloDTO = { articulo1: 'articulo1', codigo: 'codigo1', descripcion: 'descripcion1', precio: 7, stock: 7, fkTienda:7 }
;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.articuloService.obtenerPorId(params['id']).subscribe(tienda => {
        this.modelo = tienda;
      }, () => this.router.navigate(['/articulo']))
    });
  }

  guardarCambios(articulo: articuloCreacionDTO) {
    this.articuloService.editar(this.modelo.idArticulo, articulo)
      .subscribe(() => {
        this.router.navigate(['articulo']);
      }, error => this.errores = parsearErroresAPI(error))
  }

}

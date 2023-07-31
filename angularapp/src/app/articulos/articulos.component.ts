import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { MatTable } from '@angular/material/table';
import { articuloDTO, tiendaMenu } from './articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  constructor(private articuloService: ArticulosService) { }

  @ViewChild('table')
  table!: MatTable<any>

  //tiendas = [
  //  { Idtienda: 1, Tienda: 'Tienda 1' },
  //  { IdTienda: 2, Tienda: 'Tienda 2' },
  //  { IdTienda: 3, Tienda: 'Tienda 3' },
  //  { IdTienda: 4, Tienda: 'Tienda 4' }
  //];

  tiendas!: tiendaMenu[];

  articulo!: articuloDTO[];
  columnasAMostrar = ['fkTienda','articulo1', 'codigo', 'descripcion', 'precio', 'imagen', 'stock','acciones'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.articuloService.obtenerTodos().subscribe(articulos => {
      this.articulo = articulos;
    }, error => console.error(error));

    this.articuloService.obtenerMenuT().subscribe(tiendas => {
      this.tiendas = tiendas;
    }, error => console.error(error));

  }

  borrar(id: number) {
    this.articuloService.borrar(id).subscribe(() => {
      this.obtenerTodosB()
    }, error => console.error(error));
  }

  obtenerTodosB() {
    this.articuloService.obtenerTodos().subscribe(articulos => {
      this.articulo = articulos;
    }


    )
  }

}

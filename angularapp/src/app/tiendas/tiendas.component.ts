import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { tiendaDTO } from './tienda';
import { TiendasService } from './tiendas.service';
import { SeguridadService } from '../seguridad/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  constructor(private tiendaService: TiendasService, private seguridadService: SeguridadService
    , private router: Router) { }

  @ViewChild('table')
  table!: MatTable<any>;

  tienda!: tiendaDTO[];
  columnasAMostrar = ['idTienda', 'sucursal', 'calle', 'cp', 'colonia', 'ciudad', 'acciones'];
  //columnasAMostrar = ['idTienda', 'sucursal', 'calle', 'cp', 'colonia', 'ciudad'];
  //columnasAMostrar = ['idTienda', 'sucursal'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10; 

  ngOnInit(): void {
    //this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);

    var re = this.seguridadService.estaLogueado();

    if (!re) { this.router.navigate(['']); }

    this.tiendaService.obtenerTodos().subscribe(tiendas => {
      this.tienda = tiendas;
    }, error => console.error(error));
  }

  borrar(id: number) {
    this.tiendaService.borrar(id)
      .subscribe(() => {
        this.obtenerTodosB()
        }, error => console.error(error));
  }

  obtenerTodosB() {
    this.tiendaService.obtenerTodos().subscribe(tiendas => {
      this.tienda = tiendas;
    }, error => console.error(error));
  }

  salirTiendas() {
    this.seguridadService.logout();
    this.router.navigate(['']);
  }

  //borrar(id: number) {
  //  this.tiendaService.borrar(id)
  //    .subscribe(() => {
  //      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  //    }, error => console.error(error));
  //}

  //cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
  //  this.tiendaService.obtenerPaginado(pagina, cantidadElementosAMostrar)
  //    .subscribe((respuesta: HttpResponse<tiendaDTO[]>) => {
  //      this.tienda = respuesta.body;
  //      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
  //    }, error => console.error(error));
  //}

  //actualizarPaginacion(datos: PageEvent) {
  //  this.paginaActual = datos.pageIndex + 1;
  //  this.cantidadRegistrosAMostrar = datos.pageSize;
  //  this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  //}

}

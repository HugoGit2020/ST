import { Component, OnInit } from '@angular/core';
import { tiendaCreacionDTO, tiendaDTO } from '../tienda';
import { Router, ActivatedRoute } from '@angular/router';
import { TiendasService } from '../tiendas.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-tienda',
  templateUrl: './editar-tienda.component.html',
  styleUrls: ['./editar-tienda.component.css']
})
export class EditarTiendaComponent implements OnInit {
  constructor(private router: Router, private tiendaService: TiendasService,
    private activatedRoute: ActivatedRoute) { }

  //modelo: tiendaCreacionDTO = { Sucursal: 'Tienda1', calle: 'Tienda1', CP: '04000', Colonia: 'Colonia1', Ciudad: 'Ciudad1', Activo: true };
  modelo!: tiendaDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tiendaService.obtenerPorId(params['id']).subscribe(tienda => {
        this.modelo = tienda;
      }, () => this.router.navigate(['/tienda']))
    });
  }

  guardarCambios(tienda: tiendaCreacionDTO) {
    this.tiendaService.editar(this.modelo.idTienda, tienda)
      .subscribe(() => {
        this.router.navigate(['tienda']);
      }, error => this.errores = parsearErroresAPI(error))
  }

}

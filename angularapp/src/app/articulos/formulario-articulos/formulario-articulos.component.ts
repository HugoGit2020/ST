import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { articuloCreacionDTO, tiendaMenu } from '../articulo';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-formulario-articulos',
  templateUrl: './formulario-articulos.component.html',
  styleUrls: ['./formulario-articulos.component.css']
})
export class FormularioArticulosComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private articuloService: ArticulosService) { }

  form!: FormGroup;

  //tiendas = [
  //  { Idtienda: 1, Tienda: 'Tienda 1' },
  //  { IdTienda: 2, Tienda: 'Tienda 2' },
  //  { IdTienda: 3, Tienda: 'Tienda 3' },
  //  { IdTienda: 4, Tienda: 'Tienda 4'}
  //];

  @Input()
  modelo!: articuloCreacionDTO;
  tiendas!: tiendaMenu[];

  @Output()
  onSubmit: EventEmitter<articuloCreacionDTO> = new EventEmitter<articuloCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fkTienda: [0],
      articulo1: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      codigo: [''],
      descripcion: [''],
      precio: [0],
      imagen: [''],
      stock: [0],
      idArticulo: [0]      
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }

    this.articuloService.obtenerMenuT().subscribe((tiendas: tiendaMenu[]) => {
      this.tiendas = tiendas;
    }, (error: any) => console.error(error));

  }

  archivoSeleccionado(file: any) {
    this.form.get('imagen')?.setValue(file);
  }

  guardarCambios() {
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoArticulo() {
    var campoA = this.form.get('articulo1');
    if (campoA?.hasError('required')) {
      return 'El campo Articulo es requerido';
    }

    if (campoA?.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    return '';
  }

}

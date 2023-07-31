import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tiendaCreacionDTO } from '../tienda';

@Component({
  selector: 'app-formulario-tiendas',
  templateUrl: './formulario-tiendas.component.html',
  styleUrls: ['./formulario-tiendas.component.css']
})
export class FormularioTiendasComponent implements OnInit{
  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  modelo?: tiendaCreacionDTO;

  @Output()
  onSubmit: EventEmitter<tiendaCreacionDTO> = new EventEmitter<tiendaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      sucursal: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]
      ,calle: ['']
      ,cp: ['']
      ,colonia: ['']
      , ciudad: ['']
      , idTienda: [0]
      , activo: [true]
    });

      if (this.modelo !== undefined) {
        this.form.patchValue(this.modelo);
      }

  }

    guardarCambios() {
        this.onSubmit.emit(this.form.value);
    }
  
  obtenerErrorCampoSucursal() {
    var campoS = this.form.get('Sucursal');
    if (campoS?.hasError('required')) {
      return 'Campo Requerido';
    }

    if (campoS?.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    return '';
  }
}

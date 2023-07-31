import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArticulosComponent } from './formulario-articulos.component';

describe('FormularioArticulosComponent', () => {
  let component: FormularioArticulosComponent;
  let fixture: ComponentFixture<FormularioArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioArticulosComponent]
    });
    fixture = TestBed.createComponent(FormularioArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

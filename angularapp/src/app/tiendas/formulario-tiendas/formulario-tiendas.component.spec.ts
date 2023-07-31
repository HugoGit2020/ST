import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTiendasComponent } from './formulario-tiendas.component';

describe('FormularioTiendasComponent', () => {
  let component: FormularioTiendasComponent;
  let fixture: ComponentFixture<FormularioTiendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTiendasComponent]
    });
    fixture = TestBed.createComponent(FormularioTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

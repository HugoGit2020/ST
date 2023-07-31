import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizadoComponent } from './autorizado.component';

describe('AutorizadoComponent', () => {
  let component: AutorizadoComponent;
  let fixture: ComponentFixture<AutorizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorizadoComponent]
    });
    fixture = TestBed.createComponent(AutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

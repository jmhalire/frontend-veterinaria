import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesreporteComponent } from './opcionesreporte.component';

describe('OpcionesreporteComponent', () => {
  let component: OpcionesreporteComponent;
  let fixture: ComponentFixture<OpcionesreporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesreporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesreporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

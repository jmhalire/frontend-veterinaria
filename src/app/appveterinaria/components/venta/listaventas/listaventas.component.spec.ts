import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaventasComponent } from './listaventas.component';

describe('ListaventasComponent', () => {
  let component: ListaventasComponent;
  let fixture: ComponentFixture<ListaventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

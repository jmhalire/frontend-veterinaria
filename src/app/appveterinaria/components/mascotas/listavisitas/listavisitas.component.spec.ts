import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavisitasComponent } from './listavisitas.component';

describe('ListavisitasComponent', () => {
  let component: ListavisitasComponent;
  let fixture: ComponentFixture<ListavisitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListavisitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListavisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

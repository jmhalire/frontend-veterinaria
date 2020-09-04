import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamascotasComponent } from './listamascotas.component';

describe('ListamascotasComponent', () => {
  let component: ListamascotasComponent;
  let fixture: ComponentFixture<ListamascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListamascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

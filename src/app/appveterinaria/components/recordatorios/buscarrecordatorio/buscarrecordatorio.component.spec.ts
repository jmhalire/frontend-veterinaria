import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarrecordatorioComponent } from './buscarrecordatorio.component';

describe('BuscarrecordatorioComponent', () => {
  let component: BuscarrecordatorioComponent;
  let fixture: ComponentFixture<BuscarrecordatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarrecordatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarrecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

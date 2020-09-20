import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacategoriaComponent } from './nuevacategoria.component';

describe('NuevacategoriaComponent', () => {
  let component: NuevacategoriaComponent;
  let fixture: ComponentFixture<NuevacategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevacategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevacategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

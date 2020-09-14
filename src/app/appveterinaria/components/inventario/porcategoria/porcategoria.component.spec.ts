import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcategoriaComponent } from './porcategoria.component';

describe('PorcategoriaComponent', () => {
  let component: PorcategoriaComponent;
  let fixture: ComponentFixture<PorcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

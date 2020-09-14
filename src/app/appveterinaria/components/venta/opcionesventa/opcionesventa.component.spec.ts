import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesventaComponent } from './opcionesventa.component';

describe('OpcionesventaComponent', () => {
  let component: OpcionesventaComponent;
  let fixture: ComponentFixture<OpcionesventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaventaComponent } from './nuevaventa.component';

describe('NuevaventaComponent', () => {
  let component: NuevaventaComponent;
  let fixture: ComponentFixture<NuevaventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

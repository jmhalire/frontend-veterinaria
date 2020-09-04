import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesmascotaComponent } from './detallesmascota.component';

describe('DetallesmascotaComponent', () => {
  let component: DetallesmascotaComponent;
  let fixture: ComponentFixture<DetallesmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

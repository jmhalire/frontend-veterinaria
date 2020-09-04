import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarmascotaComponent } from './agregarmascota.component';

describe('AgregarmascotaComponent', () => {
  let component: AgregarmascotaComponent;
  let fixture: ComponentFixture<AgregarmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

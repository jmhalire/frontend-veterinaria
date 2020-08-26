import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionmascotasComponent } from './opcionmascotas.component';

describe('OpcionmascotasComponent', () => {
  let component: OpcionmascotasComponent;
  let fixture: ComponentFixture<OpcionmascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionmascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionmascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

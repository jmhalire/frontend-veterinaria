import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesproveedorComponent } from './opcionesproveedor.component';

describe('OpcionesproveedorComponent', () => {
  let component: OpcionesproveedorComponent;
  let fixture: ComponentFixture<OpcionesproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

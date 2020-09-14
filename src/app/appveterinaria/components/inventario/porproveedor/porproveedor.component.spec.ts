import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorproveedorComponent } from './porproveedor.component';

describe('PorproveedorComponent', () => {
  let component: PorproveedorComponent;
  let fixture: ComponentFixture<PorproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

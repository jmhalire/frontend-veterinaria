import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarproveedorComponent } from './buscarproveedor.component';

describe('BuscarproveedorComponent', () => {
  let component: BuscarproveedorComponent;
  let fixture: ComponentFixture<BuscarproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

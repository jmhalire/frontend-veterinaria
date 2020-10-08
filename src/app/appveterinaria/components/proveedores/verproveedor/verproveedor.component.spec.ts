import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerproveedorComponent } from './verproveedor.component';

describe('VerproveedorComponent', () => {
  let component: VerproveedorComponent;
  let fixture: ComponentFixture<VerproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

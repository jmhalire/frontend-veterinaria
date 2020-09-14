import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoproveedorComponent } from './nuevoproveedor.component';

describe('NuevoproveedorComponent', () => {
  let component: NuevoproveedorComponent;
  let fixture: ComponentFixture<NuevoproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

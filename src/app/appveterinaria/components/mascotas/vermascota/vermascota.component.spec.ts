import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermascotaComponent } from './vermascota.component';

describe('VermascotaComponent', () => {
  let component: VermascotaComponent;
  let fixture: ComponentFixture<VermascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

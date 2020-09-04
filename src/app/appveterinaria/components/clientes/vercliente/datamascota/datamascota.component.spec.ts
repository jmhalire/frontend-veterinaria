import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamascotaComponent } from './datamascota.component';

describe('DatamascotaComponent', () => {
  let component: DatamascotaComponent;
  let fixture: ComponentFixture<DatamascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

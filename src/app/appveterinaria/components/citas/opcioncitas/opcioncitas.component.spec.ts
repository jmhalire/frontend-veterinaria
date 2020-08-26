import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcioncitasComponent } from './opcioncitas.component';

describe('OpcioncitasComponent', () => {
  let component: OpcioncitasComponent;
  let fixture: ComponentFixture<OpcioncitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcioncitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcioncitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

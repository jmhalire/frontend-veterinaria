import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionclientesComponent } from './opcionclientes.component';

describe('OpcionclientesComponent', () => {
  let component: OpcionclientesComponent;
  let fixture: ComponentFixture<OpcionclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

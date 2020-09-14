import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesinventarioComponent } from './opcionesinventario.component';

describe('OpcionesinventarioComponent', () => {
  let component: OpcionesinventarioComponent;
  let fixture: ComponentFixture<OpcionesinventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesinventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

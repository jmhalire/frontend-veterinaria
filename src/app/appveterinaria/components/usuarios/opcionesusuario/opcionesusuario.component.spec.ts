import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesusuarioComponent } from './opcionesusuario.component';

describe('OpcionesusuarioComponent', () => {
  let component: OpcionesusuarioComponent;
  let fixture: ComponentFixture<OpcionesusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

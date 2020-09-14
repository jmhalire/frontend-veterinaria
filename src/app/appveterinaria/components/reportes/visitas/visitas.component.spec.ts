import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasComponent } from './visitas.component';

describe('VisitasComponent', () => {
  let component: VisitasComponent;
  let fixture: ComponentFixture<VisitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

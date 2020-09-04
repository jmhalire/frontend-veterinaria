import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarclienteComponent } from './agregarcliente.component';

describe('AgregarclienteComponent', () => {
  let component: AgregarclienteComponent;
  let fixture: ComponentFixture<AgregarclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

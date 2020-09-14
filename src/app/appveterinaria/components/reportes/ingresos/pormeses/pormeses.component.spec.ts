import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PormesesComponent } from './pormeses.component';

describe('PormesesComponent', () => {
  let component: PormesesComponent;
  let fixture: ComponentFixture<PormesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PormesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PormesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

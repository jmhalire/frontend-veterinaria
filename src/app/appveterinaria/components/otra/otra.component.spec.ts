import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraComponent } from './otra.component';

describe('OtraComponent', () => {
  let component: OtraComponent;
  let fixture: ComponentFixture<OtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

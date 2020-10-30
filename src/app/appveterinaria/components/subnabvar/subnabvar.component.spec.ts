import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnabvarComponent } from './subnabvar.component';

describe('SubnabvarComponent', () => {
  let component: SubnabvarComponent;
  let fixture: ComponentFixture<SubnabvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnabvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

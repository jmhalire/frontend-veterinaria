import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DehoyComponent } from './dehoy.component';

describe('DehoyComponent', () => {
  let component: DehoyComponent;
  let fixture: ComponentFixture<DehoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DehoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DehoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

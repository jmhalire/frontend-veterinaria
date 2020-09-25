import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerproductoComponent } from './verproducto.component';

describe('VerproductoComponent', () => {
  let component: VerproductoComponent;
  let fixture: ComponentFixture<VerproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

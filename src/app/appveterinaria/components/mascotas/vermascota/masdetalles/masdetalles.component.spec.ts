import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasdetallesComponent } from './masdetalles.component';

describe('MasdetallesComponent', () => {
  let component: MasdetallesComponent;
  let fixture: ComponentFixture<MasdetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasdetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

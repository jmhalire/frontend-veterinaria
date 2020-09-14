import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaproveedoresComponent } from './listaproveedores.component';

describe('ListaproveedoresComponent', () => {
  let component: ListaproveedoresComponent;
  let fixture: ComponentFixture<ListaproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacitasComponent } from './listacitas.component';

describe('ListacitasComponent', () => {
  let component: ListacitasComponent;
  let fixture: ComponentFixture<ListacitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

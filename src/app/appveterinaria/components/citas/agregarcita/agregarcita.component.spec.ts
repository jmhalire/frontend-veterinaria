import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcitaComponent } from './agregarcita.component';

describe('AgregarcitaComponent', () => {
  let component: AgregarcitaComponent;
  let fixture: ComponentFixture<AgregarcitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

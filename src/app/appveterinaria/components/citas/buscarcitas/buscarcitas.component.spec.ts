import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarcitasComponent } from './buscarcitas.component';

describe('BuscarcitasComponent', () => {
  let component: BuscarcitasComponent;
  let fixture: ComponentFixture<BuscarcitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarcitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

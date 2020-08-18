import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppveterinariaComponent } from './appveterinaria.component';

describe('AppveterinariaComponent', () => {
  let component: AppveterinariaComponent;
  let fixture: ComponentFixture<AppveterinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppveterinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppveterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarmascotaComponent } from './buscarmascota.component';

describe('BuscarmascotaComponent', () => {
  let component: BuscarmascotaComponent;
  let fixture: ComponentFixture<BuscarmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

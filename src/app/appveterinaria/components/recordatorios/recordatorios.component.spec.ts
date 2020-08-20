import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatoriosComponent } from './recordatorios.component';

describe('RecordatoriosComponent', () => {
  let component: RecordatoriosComponent;
  let fixture: ComponentFixture<RecordatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

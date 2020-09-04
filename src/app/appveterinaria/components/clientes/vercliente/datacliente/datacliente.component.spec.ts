import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataclienteComponent } from './datacliente.component';

describe('DataclienteComponent', () => {
  let component: DataclienteComponent;
  let fixture: ComponentFixture<DataclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

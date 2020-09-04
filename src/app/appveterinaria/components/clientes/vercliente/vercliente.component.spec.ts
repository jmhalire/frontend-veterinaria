import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerclienteComponent } from './vercliente.component';

describe('VerclienteComponent', () => {
  let component: VerclienteComponent;
  let fixture: ComponentFixture<VerclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

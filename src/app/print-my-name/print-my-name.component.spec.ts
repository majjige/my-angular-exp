import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMyNameComponent } from './print-my-name.component';

describe('PrintMyNameComponent', () => {
  let component: PrintMyNameComponent;
  let fixture: ComponentFixture<PrintMyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

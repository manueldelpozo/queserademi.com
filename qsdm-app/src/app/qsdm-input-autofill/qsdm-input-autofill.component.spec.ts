import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdmInputAutofillComponent } from './qsdm-input-autofill.component';

describe('QsdmInputAutofillComponent', () => {
  let component: QsdmInputAutofillComponent;
  let fixture: ComponentFixture<QsdmInputAutofillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdmInputAutofillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdmInputAutofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

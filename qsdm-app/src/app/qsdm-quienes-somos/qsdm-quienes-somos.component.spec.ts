import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdmQuienesSomosComponent } from './qsdm-quienes-somos.component';

describe('QsdmQuienesSomosComponent', () => {
  let component: QsdmQuienesSomosComponent;
  let fixture: ComponentFixture<QsdmQuienesSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdmQuienesSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdmQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdmMainpageComponent } from './qsdm-mainpage.component';

describe('QsdmMainpageComponent', () => {
  let component: QsdmMainpageComponent;
  let fixture: ComponentFixture<QsdmMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdmMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdmMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

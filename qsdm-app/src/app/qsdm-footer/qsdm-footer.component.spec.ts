import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdmFooterComponent } from './qsdm-footer.component';

describe('QsdmFooterComponent', () => {
  let component: QsdmFooterComponent;
  let fixture: ComponentFixture<QsdmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

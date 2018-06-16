import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdmHeaderComponent } from './qsdm-header.component';

describe('QsdmHeaderComponent', () => {
  let component: QsdmHeaderComponent;
  let fixture: ComponentFixture<QsdmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

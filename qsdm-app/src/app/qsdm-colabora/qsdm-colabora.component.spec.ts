import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdmColaboraComponent } from './qsdm-colabora.component';

describe('QsdmColaboraComponent', () => {
  let component: QsdmColaboraComponent;
  let fixture: ComponentFixture<QsdmColaboraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdmColaboraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdmColaboraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

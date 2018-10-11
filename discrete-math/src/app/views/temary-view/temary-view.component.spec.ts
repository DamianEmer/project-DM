import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaryViewComponent } from './temary-view.component';

describe('TemaryViewComponent', () => {
  let component: TemaryViewComponent;
  let fixture: ComponentFixture<TemaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

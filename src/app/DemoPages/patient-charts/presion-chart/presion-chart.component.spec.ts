import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresionChartComponent } from './presion-chart.component';

describe('PresionChartComponent', () => {
  let component: PresionChartComponent;
  let fixture: ComponentFixture<PresionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

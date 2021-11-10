import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaChartComponent } from './temperatura-chart.component';

describe('TemperaturaChartComponent', () => {
  let component: TemperaturaChartComponent;
  let fixture: ComponentFixture<TemperaturaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

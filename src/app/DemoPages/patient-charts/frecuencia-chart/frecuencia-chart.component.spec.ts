import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuenciaChartComponent } from './frecuencia-chart.component';

describe('FrecuenciaChartComponent', () => {
  let component: FrecuenciaChartComponent;
  let fixture: ComponentFixture<FrecuenciaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrecuenciaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuenciaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

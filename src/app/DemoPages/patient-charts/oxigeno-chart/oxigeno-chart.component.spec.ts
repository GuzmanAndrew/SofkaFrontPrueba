import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxigenoChartComponent } from './oxigeno-chart.component';

describe('OxigenoChartComponent', () => {
  let component: OxigenoChartComponent;
  let fixture: ComponentFixture<OxigenoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxigenoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxigenoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

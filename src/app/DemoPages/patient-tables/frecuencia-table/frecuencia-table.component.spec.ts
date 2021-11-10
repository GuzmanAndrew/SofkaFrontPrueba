import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuenciaTableComponent } from './frecuencia-table.component';

describe('FrecuenciaTableComponent', () => {
  let component: FrecuenciaTableComponent;
  let fixture: ComponentFixture<FrecuenciaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrecuenciaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuenciaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

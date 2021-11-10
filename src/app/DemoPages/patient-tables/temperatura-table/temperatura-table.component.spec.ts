import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaTableComponent } from './temperatura-table.component';

describe('TemperaturaTableComponent', () => {
  let component: TemperaturaTableComponent;
  let fixture: ComponentFixture<TemperaturaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

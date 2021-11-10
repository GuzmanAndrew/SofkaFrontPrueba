import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxigenoTableComponent } from './oxigeno-table.component';

describe('OxigenoTableComponent', () => {
  let component: OxigenoTableComponent;
  let fixture: ComponentFixture<OxigenoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxigenoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxigenoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresionTableComponent } from './presion-table.component';

describe('PresionTableComponent', () => {
  let component: PresionTableComponent;
  let fixture: ComponentFixture<PresionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

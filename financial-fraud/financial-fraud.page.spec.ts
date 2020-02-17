import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialFraudPage } from './financial-fraud.page';

describe('FinancialFraudPage', () => {
  let component: FinancialFraudPage;
  let fixture: ComponentFixture<FinancialFraudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialFraudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialFraudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDebtPage } from './financial-debt.page';

describe('FinancialDebtPage', () => {
  let component: FinancialDebtPage;
  let fixture: ComponentFixture<FinancialDebtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialDebtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialDebtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

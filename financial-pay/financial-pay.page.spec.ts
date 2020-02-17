import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPayPage } from './financial-pay.page';

describe('FinancialPayPage', () => {
  let component: FinancialPayPage;
  let fixture: ComponentFixture<FinancialPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialPayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

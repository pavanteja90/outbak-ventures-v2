import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentManagementComponent } from './investment-management.component';

describe('InvestmentManagementComponent', () => {
  let component: InvestmentManagementComponent;
  let fixture: ComponentFixture<InvestmentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

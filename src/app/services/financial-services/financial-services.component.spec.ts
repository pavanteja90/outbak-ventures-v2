import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialServicesComponent } from './financial-services.component';

describe('FinancialServicesComponent', () => {
  let component: FinancialServicesComponent;
  let fixture: ComponentFixture<FinancialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

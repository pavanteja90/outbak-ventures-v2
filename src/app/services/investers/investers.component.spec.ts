import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestersComponent } from './investers.component';

describe('InvestersComponent', () => {
  let component: InvestersComponent;
  let fixture: ComponentFixture<InvestersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

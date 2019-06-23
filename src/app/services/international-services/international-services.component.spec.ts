import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalServicesComponent } from './international-services.component';

describe('InternationalServicesComponent', () => {
  let component: InternationalServicesComponent;
  let fixture: ComponentFixture<InternationalServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

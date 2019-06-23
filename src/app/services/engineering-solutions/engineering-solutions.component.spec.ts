import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringSolutionsComponent } from './engineering-solutions.component';

describe('EngineeringSolutionsComponent', () => {
  let component: EngineeringSolutionsComponent;
  let fixture: ComponentFixture<EngineeringSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

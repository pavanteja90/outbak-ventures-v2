import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHatcheryComponent } from './the-hatchery.component';

describe('TheHatcheryComponent', () => {
  let component: TheHatcheryComponent;
  let fixture: ComponentFixture<TheHatcheryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheHatcheryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheHatcheryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

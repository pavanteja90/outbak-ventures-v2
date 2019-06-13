import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurIndustryComponent } from './our-industry.component';

describe('OurIndustryComponent', () => {
    let component: OurIndustryComponent;
    let fixture: ComponentFixture<OurIndustryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OurIndustryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OurIndustryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

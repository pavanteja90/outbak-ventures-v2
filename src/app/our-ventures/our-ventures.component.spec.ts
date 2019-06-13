import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVenturesComponent } from './our-ventures.component';

describe('OurVenturesComponent', () => {
    let component: OurVenturesComponent;
    let fixture: ComponentFixture<OurVenturesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OurVenturesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OurVenturesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

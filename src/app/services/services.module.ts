import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurIndustryComponent } from './our-industry/our-industry.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';

@NgModule({
    declarations: [
        OurIndustryComponent,
        OurServicesComponent,
        ServicesComponent
    ],
    imports: [
        CommonModule,
        ServicesRoutingModule
    ]
})
export class ServicesModule { }

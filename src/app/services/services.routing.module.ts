import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurIndustryComponent } from './our-industry/our-industry.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServicesComponent } from './services.component';

const _servicesRoutes: Routes = [
    {
        path: 'our-industry', component: OurIndustryComponent
    },
    {
        path: 'our-services', component: OurServicesComponent
    },
    {
        path: '', component: ServicesComponent
    },
    {
        path: '**', redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forChild(_servicesRoutes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }

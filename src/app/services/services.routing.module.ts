import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { InvestmentManagementComponent } from './investment-management/investment-management.component';
import { BusinessConsultingComponent } from './business-consulting/business-consulting.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { TheHatcheryComponent } from './the-hatchery/the-hatchery.component';
import { FinancialServicesComponent } from './financial-services/financial-services.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { EngineeringSolutionsComponent } from './engineering-solutions/engineering-solutions.component';
import { InternationalServicesComponent } from './international-services/international-services.component';

const _servicesRoutes: Routes = [
    
    {
        path: '', component: ServicesComponent
    },
    {
        path: 'inv-mgmt', component: InvestmentManagementComponent
    },
    {
        path: 'bsns-cons', component: BusinessConsultingComponent
    },
    {
        path: 'collab', component: CollaborationComponent
    },
    {
        path: 'the-hatch', component: TheHatcheryComponent
    },
    {
        path: 'fin-serv', component: FinancialServicesComponent
    },
    {
        path: 'risk-mgmt', component: RiskManagementComponent
    },
    {
        path: 'engg-sols', component: EngineeringSolutionsComponent
    },
    {
        path: 'int-serv', component: InternationalServicesComponent
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

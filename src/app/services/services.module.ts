import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';
import { InvestmentManagementComponent } from './investment-management/investment-management.component';
import { BusinessConsultingComponent } from './business-consulting/business-consulting.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { TheHatcheryComponent } from './the-hatchery/the-hatchery.component';
import { FinancialServicesComponent } from './financial-services/financial-services.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { EngineeringSolutionsComponent } from './engineering-solutions/engineering-solutions.component';
import { InternationalServicesComponent } from './international-services/international-services.component';

@NgModule({
    declarations: [
        ServicesComponent,
        InvestmentManagementComponent,
        BusinessConsultingComponent,
        CollaborationComponent,
        TheHatcheryComponent,
        FinancialServicesComponent,
        RiskManagementComponent,
        EngineeringSolutionsComponent,
        InternationalServicesComponent
    ],
    imports: [
        CommonModule,
        ServicesRoutingModule
    ]
})
export class ServicesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';
import { InvestersComponent } from './investers/investers.component';
import { PartnersComponent } from './partners/partners.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
    declarations: [
        ServicesComponent,
        InvestersComponent,
        PartnersComponent,
        ClientsComponent
    ],
    imports: [
        CommonModule,
        ServicesRoutingModule
    ]
})
export class ServicesModule { }

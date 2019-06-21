import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from "./clients/clients.component";
import { InvestersComponent } from "./investers/investers.component";
import { PartnersComponent } from "./partners/partners.component";
import { ServicesComponent } from './services.component';

const _servicesRoutes: Routes = [
    {
        path: 'clients', component: ClientsComponent
    },
    {
        path: 'investers', component: InvestersComponent
    },
    
    {
        path: 'partners', component: PartnersComponent
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

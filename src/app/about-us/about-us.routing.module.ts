import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurExecutivesComponent } from './our-executives/our-executives.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutUsComponent } from './about-us.component';

const _aboutUsRoutes: Routes = [
    {
        path: 'our-executives', component: OurExecutivesComponent
    },
    {
        path: 'our-history', component: OurHistoryComponent
    },
    {
        path: 'our-team', component: OurTeamComponent
    },
    {
        path: '', component: AboutUsComponent
    },
    {
        path: '**', redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forChild(_aboutUsRoutes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule { }

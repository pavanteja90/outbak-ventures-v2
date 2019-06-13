import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurHistoryComponent } from './our-history/our-history.component';
import { OurExecutivesComponent } from './our-executives/our-executives.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutUsRoutingModule } from './about-us.routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
    declarations: [
        AboutUsComponent,
        OurHistoryComponent, 
        OurExecutivesComponent, 
        OurTeamComponent],
    imports: [
        CommonModule,
        AboutUsRoutingModule
    ]
})
export class AboutUsModule { }

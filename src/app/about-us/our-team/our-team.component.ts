import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
declare var ga: any;

@Component({
    selector: 'app-our-team',
    templateUrl: './our-team.component.html',
    styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) { 
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Our People');
    }

}

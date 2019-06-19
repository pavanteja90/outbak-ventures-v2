import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../app-services/google-analytics.service';
declare var ga: any;

@Component({
    selector: 'app-our-ventures',
    templateUrl: './our-ventures.component.html',
    styleUrls: ['./our-ventures.component.css']
})
export class OurVenturesComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) { 
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Our Ventures');
    }

}

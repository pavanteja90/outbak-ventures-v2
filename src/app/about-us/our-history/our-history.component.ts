import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
declare var ga: any;

@Component({
    selector: 'app-our-history',
    templateUrl: './our-history.component.html',
    styleUrls: ['./our-history.component.css']
})
export class OurHistoryComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) { 
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Our History');        
    }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../app-services/google-analytics.service';
import { Meta } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-our-ventures',
    templateUrl: './our-ventures.component.html',
    styleUrls: ['./our-ventures.component.css']
})
export class OurVenturesComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });

        this.meta.addTags([
            { name: 'description', content: 'Outbak Ventures ensures that your business ventures receive the utmost attention to meet your expectations. Check our associates and their success stories.' },
            { name: 'title', content: 'Our Associates' },
            { name: 'author', content: 'outbakventures' },
            { name: 'keywords', content: 'our associates, associates, outbak ventures associates' }
        ]);
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Our Ventures');
    }

}

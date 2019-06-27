import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
import { Meta } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-our-executives',
    templateUrl: './our-executives.component.html',
    styleUrls: ['./our-executives.component.css']
})
export class OurExecutivesComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta) { 
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        
        this.meta.addTags([
            { name: 'description', content: 'Meet the leaders of Outbak Ventures. Our highly qualified executives provide management consultancy to turn your dreams into a successful business.' },
            { name: 'title', content: 'Meet Our Leaders' },
            { name: 'author', content: 'outbakventures' },
            { name: 'keywords', content: 'executives, leaders, directors, ceo, outbak ventures' }
        ]);
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Our Leaders');
    }

}

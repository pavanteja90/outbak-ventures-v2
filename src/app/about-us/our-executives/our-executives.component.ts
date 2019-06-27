import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
import { Meta, Title } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-our-executives',
    templateUrl: './our-executives.component.html',
    styleUrls: ['./our-executives.component.css']
})
export class OurExecutivesComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) { 
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.meta.updateTag({ name: 'description', content: 'Meet the leaders of Outbak Ventures. Our highly qualified executives provide management consultancy to turn your dreams into a successful business.' });
        this.meta.updateTag({ name: 'keywords', content: 'executives, leaders, directors, ceo, outbak ventures' });
        this.title.setTitle('Meet Our Leaders');
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Our Leaders');
    }

}

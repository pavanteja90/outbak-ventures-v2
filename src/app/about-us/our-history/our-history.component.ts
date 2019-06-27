import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
import { Meta } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-our-history',
    templateUrl: './our-history.component.html',
    styleUrls: ['./our-history.component.css']
})
export class OurHistoryComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        
        this.meta.addTags([
            { name: 'description', content: 'Outbak Ventures was established in 2017 to focus on providing business and management consultant for small companies and entrepreneurs in Australia.' },
            { name: 'title', content: 'Who We Are' },
            { name: 'author', content: 'outbakventures' },
            { name: 'keywords', content: 'about, about outbak, about outbak ventures, who we are, history, outbak ventures' }
        ]);
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Who we are');
    }

    navigate(id: number) {
        switch (id) {
            case 1:
                this.router.navigate(['/contact-us']);
                break;
            case 2:
                this.router.navigate(['/about-us/our-executives']);
                break;
            case 3:
                this.router.navigate(['/about-us/our-team']);
                break;
            default:
                this.router.navigate(['/about-us/our-history']);
                break;
        }
    }

}

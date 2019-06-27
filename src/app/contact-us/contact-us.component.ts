import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../app-services/google-analytics.service';
import { Meta } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta) { 
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        
        this.meta.addTags([
            { name: 'description', content: 'To receive invaluable management consulting advice for your business or to transform your ideas into real businesses, contact us here.' },
            { name: 'title', content: 'Contact Us' },
            { name: 'author', content: 'outbakventures' },
            { name: 'keywords', content: 'contact, outbak ventures, consultant' }
        ]);
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Contact Us');
    }

}

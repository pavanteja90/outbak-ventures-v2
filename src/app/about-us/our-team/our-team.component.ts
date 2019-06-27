import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
import { Meta, Title } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-our-team',
    templateUrl: './our-team.component.html',
    styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.title.setTitle('Meet Our People');
        this.meta.updateTag({ name: 'description', content: 'Meet the Outbak Ventures team. The team inspires and mentor small businesses to make the right strategic business planning. Contact us today.' });
        this.meta.updateTag({ name: 'keywords', content: 'team, people, employees, meet our team, outbak ventures' });
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Our People');
    }

}

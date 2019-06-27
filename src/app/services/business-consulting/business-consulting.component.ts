import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
import { Meta, Title } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-business-consulting',
    templateUrl: './business-consulting.component.html',
    styleUrls: ['./business-consulting.component.css']
})
export class BusinessConsultingComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        })
        this.title.setTitle('Business Consulting | Services');
        this.meta.updateTag({ name: 'description', content: 'Strategic and personalised solution for all your business needs.' });
        this.meta.updateTag({ name: 'keywords', content: 'business, consulting, entrepreneurs, outbak, ventures' });
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Business Consulting');
    }

    navigate(id: number) {
        switch (id) {
            case 1:
                this.router.navigate(['/services/inv-mgmt']);
                break;
            case 2:
                this.router.navigate(['/services/bsns-cons']);
                break;
            case 3:
                this.router.navigate(['/services/collab']);
                break;
            case 4:
                this.router.navigate(['/services/the-hatch']);
                break;
            case 5:
                this.router.navigate(['/services/fin-serv']);
                break;
            case 6:
                this.router.navigate(['/services/risk-mgmt']);
                break;
            case 7:
                this.router.navigate(['/services/engg-sols']);
                break;
            case 8:
                this.router.navigate(['/services/int-serv']);
                break;
            default:
                this.router.navigate(['/services/inv-mgmt']);
                break;
        }
    }

}

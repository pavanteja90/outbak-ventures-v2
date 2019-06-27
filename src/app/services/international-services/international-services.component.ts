import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
import { Meta } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-international-services',
    templateUrl: './international-services.component.html',
    styleUrls: ['./international-services.component.css']
})
export class InternationalServicesComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        
        this.meta.addTags([
            { name: 'description', content: 'Facilitating a world without borders.' },
            { name: 'title', content: 'International Services | Services' },
            { name: 'author', content: 'outbakventures' },
            { name: 'keywords', content: 'international, world, wide, services, outbak, ventures' }
        ]);
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'International Services');
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

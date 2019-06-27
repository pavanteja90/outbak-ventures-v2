import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/app-services/google-analytics.service';
import { Meta, Title } from '@angular/platform-browser';
declare var ga: any;

@Component({
  selector: 'app-engineering-solutions',
  templateUrl: './engineering-solutions.component.html',
  styleUrls: ['./engineering-solutions.component.css']
})
export class EngineeringSolutionsComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.title.setTitle('Tech Solutions | Services');
        this.meta.updateTag({ name: 'description', content: 'Modern solutions for all modern problems.' });
        this.meta.updateTag({ name: 'keywords', content: 'tech, technical, technological, engineering, solutions, outbak, ventures' });
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Tech Solutions');
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

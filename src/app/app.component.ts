import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from './app-services/google-analytics.service';
declare var $: any;
declare var ga: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'HomePage');
    }

    navButtonClicked() {
        if($("#navButton").hasClass("btn-initial")){
            $("#navButton").removeClass("btn-initial");
            $("#navButton").addClass("btn-outline-danger");
        }
        else{
            $("#navButton").removeClass("btn-outline-danger");
            $("#navButton").addClass("btn-initial");
        }

        if($("#navButtonIcon").hasClass("fa-bars")){
            $("#navButtonIcon").removeClass("fa-bars");
            $("#navButtonIcon").addClass("fa-times");
        }
        else{
            $("#navButtonIcon").removeClass("fa-times");
            $("#navButtonIcon").addClass("fa-bars");
        }
    }

    navigate(id1: number, id2?: number) {
        switch (id1) {
            case 1:
                switch (id2) {
                    case 1:
                        this.router.navigate(['/services/our-industry']);
                        break;
                    case 2:
                        this.router.navigate(['/services/our-services']);
                        break;
                    default:
                        this.router.navigate(['/services/our-industry']);
                        break;
                }
                break;
            case 2:
                switch (id2) {
                    case 1:
                        this.router.navigate(['/about-us/our-history']);
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
                break;
            case 3:
                this.router.navigate(["/home"]);
                break;
            case 4:
                this.router.navigate(["/our-ventures"]);
                break;
            case 5:
                this.router.navigate(["/blog"]);
                break;
            case 6:
                this.router.navigate(["/contact-us"]);
                break;
            default:
                this.router.navigate(["/home"]);
                break;
        }
    }

}

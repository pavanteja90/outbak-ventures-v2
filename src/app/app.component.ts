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
        $("#myModal").modal('show');
        console.log("This is a developer tool. It is not recommended to be opened by others. Tweaking with the developer tools might result in breaking of the functionalities and might effect your website experience.")
        console.log("Developed by Pavan Teja Bhatta <pavanteja.bhatta@gmail.com>");
    }

    navButtonClicked() {
        if ($("#navButton").hasClass("btn-initial")) {
            $("#navButton").removeClass("btn-initial");
            $("#navButton").addClass("btn-outline-danger");
        }
        else {
            $("#navButton").removeClass("btn-outline-danger");
            $("#navButton").addClass("btn-initial");
        }

        if ($("#navButtonIcon").hasClass("fa-bars")) {
            $("#navButtonIcon").removeClass("fa-bars");
            $("#navButtonIcon").addClass("fa-times");
        }
        else {
            $("#navButtonIcon").removeClass("fa-times");
            $("#navButtonIcon").addClass("fa-bars");
        }
    }

    navigate(id1: number, id2?: number) {
        switch (id1) {
            case 1:
                switch (id2) {
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
                this.router.navigate(["/our-associates"]);
                break;
            case 5:
                this.router.navigate(["/blog"]);
                break;
            case 6:
                this.router.navigate(["/contact-us"]);
                break;
            case 7:
                this.router.navigate(["/cookies"]);
                break;
            default:
                this.router.navigate(["/home"]);
                break;
        }
    }
}

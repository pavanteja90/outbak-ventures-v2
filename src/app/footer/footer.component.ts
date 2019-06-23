import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
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
            default:
                this.router.navigate(["/home"]);
                break;
        }
    }

}

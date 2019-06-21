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
    
    navigate(id1: number, id2?:number) {
        switch (id1) {
            case 1:
                switch(id2){
                    case 1:
                        this.router.navigate(['/services/clients']);
                        break;
                    case 2:
                        this.router.navigate(['/services/investers']);
                        break;
                    case 3:
                        this.router.navigate(['/services/partners']);
                        break;
                    default:
                        this.router.navigate(['/services/clients']);
                        break;
                }                
                break;
            case 2:
                switch(id2){
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

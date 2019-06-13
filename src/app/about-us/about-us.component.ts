import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    navigate(id: number) {
        switch (id) {
            case 1:
                this.router.navigate(['/about-us/our-executives']);
                break;
            case 2:
                this.router.navigate(['/about-us/our-history']);
                break;
            case 3:
                this.router.navigate(['/about-us/our-team']);
                break;
        }
    }

}

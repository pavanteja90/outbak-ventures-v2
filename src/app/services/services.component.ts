import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    navigate(id: number) {
        switch (id) {
            case 1:
                this.router.navigate(['/services/our-industry']);
                break;
            case 2:
                this.router.navigate(['/services/our-services']);
                break;
        }
    }
}

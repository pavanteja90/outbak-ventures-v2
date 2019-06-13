import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router) {

    }
    navigate(id: number) {
        switch (id) {
            case 1:
                this.router.navigate(['/about-us']);
                break;
            case 2:
                this.router.navigate(['/services']);
                break;
        }
    }
}

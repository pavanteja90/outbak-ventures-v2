import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServicesModule } from "./services/services.module";
import { AboutUsModule } from './about-us/about-us.module';
import { HomeComponent } from './home/home.component';
import { OurVenturesComponent } from './our-ventures/our-ventures.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        OurVenturesComponent,
        BlogComponent,
        ContactUsComponent,
        PageNotFoundComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ServicesModule,
        AboutUsModule
    ],
    providers: [
        HttpClient,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

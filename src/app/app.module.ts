import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServicesModule } from "./services/services.module";
import { AboutUsModule } from './about-us/about-us.module';
import { HomeComponent } from './home/home.component';
import { OurVenturesComponent } from './our-ventures/our-ventures.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatCardModule } from "@angular/material";
import { CookiesInfoComponent } from './cookies-info/cookies-info.component';
import { SeoService } from './app-services/seo-service.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        OurVenturesComponent,
        BlogComponent,
        ContactUsComponent,
        PageNotFoundComponent,
        FooterComponent,
        CookiesInfoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        ServicesModule,
        AboutUsModule
    ],
    providers: [
        HttpClient,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        SeoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

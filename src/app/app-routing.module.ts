import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurVenturesComponent } from './our-ventures/our-ventures.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AboutUsModule } from './about-us/about-us.module';

const routes: Routes = [
    {
        path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(mod => mod.AboutUsModule)
    },
    {
        path: 'services', loadChildren: () => import('./services/services.module').then(mod => mod.ServicesModule)
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'our-associates', component: OurVenturesComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'contact-us', component: ContactUsComponent
    },
    {
        path: '', component: HomeComponent
    },
    {
        path: '**', redirectTo: '404'
    },
    {
        path: '404', component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

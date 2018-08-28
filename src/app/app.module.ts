import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home/home.component';
import { environment } from '../environments/environment';
import { BannerComponent } from './ui/home/banner/banner.component';
import { AboutComponent } from './ui/home/about/about.component';
import { ServicesComponent } from './ui/home/services/services.component';
import { ContactComponent } from './ui/home/contact/contact.component';
import { ProjectsComponent } from './ui/projects/projects.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, BannerComponent, AboutComponent, ServicesComponent, ContactComponent, ProjectsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}

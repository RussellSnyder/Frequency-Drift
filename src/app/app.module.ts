import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'angular2-markdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShowsComponent } from './shows/shows.component';
import { ImpressumComponent } from './impressum/impressum.component';
import {ContenfulService} from "./contenful.service";
import { PageComponent } from './page/page.component';
import {DataService} from "./data.service";
import { SocialMediaComponent } from './social-media/social-media.component';
import { PressComponent } from './press/press.component';
import { NewletterComponent } from './newletter/newletter.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ContactComponent,
    RecordsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ShowsComponent,
    ImpressumComponent,
    SocialMediaComponent,
    PressComponent,
    NewletterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [ContenfulService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShowsComponent } from './shows/shows.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    RecordsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ShowsComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

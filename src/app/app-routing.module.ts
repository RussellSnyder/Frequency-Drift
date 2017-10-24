import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router, NavigationEnd} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {RecordsComponent} from "./records/records.component";
import {ShowsComponent} from "./shows/shows.component";
import {ImpressumComponent} from "./impressum/impressum.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'records', component: RecordsComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'impressum', component: ImpressumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.scrollToTopOfPage();
      }
    });
  }


  scrollToTopOfPage() {
    window.scrollTo(0, 0);
  }
}

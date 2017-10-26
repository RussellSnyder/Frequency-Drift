import {Component} from '@angular/core';
import {PageComponent} from "../page/page.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PageComponent {
  pageId = 'homePage';
}

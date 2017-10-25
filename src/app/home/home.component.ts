import {Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import {PageComponent} from "../page/page.component";
import {ContenfulService} from "../contenful.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PageComponent {
  pageId = 'homePage';
}

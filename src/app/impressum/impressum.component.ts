import { Component, OnInit } from '@angular/core';
import {PageComponent} from "../page/page.component";

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent extends PageComponent {
  pageId = 'impressum';
}

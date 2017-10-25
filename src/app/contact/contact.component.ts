import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PageComponent} from "../page/page.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends PageComponent {
  pageId = 'contact';
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('message') message: ElementRef;

}

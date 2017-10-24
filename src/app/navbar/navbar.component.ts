import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navToggle') navToggle;

  constructor() { }

  ngOnInit() {
  }

  closeMenu(e) {
    if (this.navToggle.nativeElement.className.indexOf('collapsed') !== -1 || document.documentElement.clientWidth < 992) {
      e.preventDefault();
      this.navToggle.nativeElement.click();
    }
  }

}

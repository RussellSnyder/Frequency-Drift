import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navToggle') navToggle;
  @ViewChild('navCollapse') navCollapse;

  navCollapseClass = '';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    let className = this.navCollapse.nativeElement.className;
    if (className.indexOf('slideDown') === -1) {
      this.navCollapseClass = 'slideDown';
    } else {
      this.navCollapseClass = '';
      }
  }

  closeMenu(e) {
    if (this.navToggle.nativeElement.className.indexOf('collapsed') !== -1 || document.documentElement.clientWidth < 768) {
      e.preventDefault();
      this.navToggle.nativeElement.click();
    }
  }

}

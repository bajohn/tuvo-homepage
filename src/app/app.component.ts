import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuvo-homepage';
  navBarClass = ['collapse', 'navbar-collapse'];
  navItemClass = ['nav-item', 'active'];
  navItems: Array<navItem> = [
    {
      name: 'Home',
      link: '',
      itemClass: ['nav-item']
    },
    {
      name: 'Samples',
      link: 'samples',
      itemClass: ['nav-item']
    },
    {
      name: 'PI Viewer',
      link: 'pi-viewer',
      itemClass: ['nav-item']
    },
    {
      name: 'Contact',
      link: 'contact',
      itemClass: ['nav-item']
    }
  ]
  constructor(private router: Router) {
    this.router.events.subscribe(el => {
      if (el instanceof NavigationEnd) {
        this.navItems.forEach(navEl => {
          if ('/' + navEl.link === el.url) {
            navEl.itemClass = ['nav-item active'];
          } else {
            navEl.itemClass = ['nav-item'];
          }
        })
      }
    })
  }

  navbarToggle() {
    const showClass = 'show';
    if (this.navBarClass.indexOf(showClass) > -1) {
      this.navBarClass = ['collapse', 'navbar-collapse'];
    } else {
      this.navBarClass = ['collapse', 'navbar-collapse', showClass];
    }
  }


}

interface navItem {
  name: string,
  link: string,
  itemClass: Array<string>
}
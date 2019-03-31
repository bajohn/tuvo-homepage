import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuvo-homepage';
  navBarClass = ['collapse', 'navbar-collapse'];

  navbarToggle() {
    const showClass = 'show';
    if (this.navBarClass.indexOf(showClass) > -1) {
      this.navBarClass = ['collapse', 'navbar-collapse'];
    } else {
      this.navBarClass = ['collapse', 'navbar-collapse', showClass];
    }
  }
}


import { Component, ViewEncapsulation } from '@angular/core';

// Decorator
// @Component unifies the HTML, SCSS, TS and expose in a selector.
@Component({
  selector: 'app-root', // exposing the comp in a selector
  templateUrl: './app.component.html', // HTML -- mandatory -- only one
  styleUrls: ['./app.component.scss'] // CSS/SCSS -- optional -- can be multiple
})
export class AppComponent {
  // TS
  title = 'contact-mgr-nov2020';
}

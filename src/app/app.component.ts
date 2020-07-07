import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
transition
  ]
})
export class AppComponent {
  // constructor(private themeService: NbThemeService) {}
  // themeCheck = false;
  // theme = 'Day Mode';
  // changeTheme() {
  //   this.theme = 'Day Mode';
  //   console.log(this.themeCheck);
  //   this.themeCheck = ! this.themeCheck;
  //   this.themeService.changeTheme('custom-theme-default');
  //   if (this.themeCheck) {
  //     this.theme = 'Night Mode';
  //     this.themeService.changeTheme('custom-theme-dark');
  //   }
  // }

  prepapareRoute(outlet: RouterOutlet) {
    
  }
}

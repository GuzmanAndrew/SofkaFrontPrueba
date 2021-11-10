import {Component, HostBinding} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ThemeOptions} from '../../../theme-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(public globals: ThemeOptions, private router: Router) {
  }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  isActive: boolean;

  @select('config') public config$: Observable<any>;

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  }

  inicio() {
    this.router.navigate(['welcome']);
  }

}

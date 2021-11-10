import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '../../../../services/token.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.sass']
})
export class UserDropdownComponent implements OnInit {

  isLogged = false;

  faUserAlt = faUserAlt;
  faSignOutAlt = faSignOutAlt;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/']);
  }

}

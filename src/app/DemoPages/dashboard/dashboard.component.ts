import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServiceService } from 'src/app/services/service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public isActive: any;

  personas: any = [];
  filterPost = '';
  p: number = 1;
  userMessageEs = '';
  userMessageEn = '';
  userMessageFr = '';


  isLogged = false;
  nombreUsuario = '';

  constructor(private router: Router, private tokenService: TokenService, 
    private service: ServiceService, private auth: AuthService) { }

  ngOnInit() {
    this.getPersons();
    this.getGreetEs();
    this.getGreetEn();
    this.getGreetFr();
  }

  getPersons() {
    this.service.getPersonas().subscribe(
      res => {
        this.personas = res;
      },
      err => console.error(err)
    );
  }

  getGreetEs() {
    const userName = sessionStorage.getItem('AuthUserName'); 
    this.auth.greetEs(userName).subscribe(
      (res: any) => {
        this.userMessageEs = res.mensaje;
      },
      err => console.error(err)
    );
  }

  greetEs() {
    alert(this.userMessageEs);
  }

  getGreetEn() {
    const userName = sessionStorage.getItem('AuthUserName'); 
    this.auth.greetEn(userName).subscribe(
      (res: any) => {
        this.userMessageEn = res.mensaje;
      },
      err => console.error(err)
    );
  }

  greetEn() {
    alert(this.userMessageEn);
  }

  getGreetFr() {
    const userName = sessionStorage.getItem('AuthUserName'); 
    this.auth.greetFr(userName).subscribe(
      (res: any) => {
        this.userMessageFr = res.mensaje;
      },
      err => console.error(err)
    );
  }

  greetFr() {
    alert(this.userMessageFr);
  }

}

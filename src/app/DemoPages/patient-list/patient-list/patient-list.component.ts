import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.sass']
})
export class PatientListComponent implements OnInit {
  
  public isActive: any;

  personas: any = [];
  filterPost = '';
  p: number = 1;

  isLogged = false;
  nombreUsuario = '';

  constructor(private router: Router, private tokenService: TokenService, 
    private service: ServiceService) { }

  ngOnInit() {
    this.getPersons();
    this.getUserName();
  }

  getPersons() {
    this.service.getPersonas().subscribe(
      res => {
        this.personas = res;
      },
      err => console.error(err)
    );
  }

  getUserName() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

}

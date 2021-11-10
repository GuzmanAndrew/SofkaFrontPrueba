import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-information-patient',
  templateUrl: './information-patient.component.html',
  styleUrls: ['./information-patient.component.sass']
})
export class InformationPatientComponent implements OnInit {

  paciente: Paciente = {
    id: null,
    cedula: null,
    nombres: '',
    apellidos: '',
    edad: null,
    direccion: '',
    email: '',
    numcel: '',
    patologia: '',
    patologiar: '',
    password: ''
  };

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.service.getPersonaId(params.id).subscribe(data => {
      console.log(data);
      this.paciente = data;
    },
    err => console.log(err)
    );
  }

}

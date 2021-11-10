import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-frecuencia-table',
  templateUrl: './frecuencia-table.component.html',
  styleUrls: ['./frecuencia-table.component.sass']
})
export class FrecuenciaTableComponent implements OnInit {

  frecuencias: any = [];
  p: number = 1;

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.service.getFrecuenciaPersonaId(params.id).subscribe(data => {
      console.log(data);
      this.frecuencias = data;
    },
    err => console.log(err)
    );
  }

}

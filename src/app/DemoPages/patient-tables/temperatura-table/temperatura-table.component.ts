import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-temperatura-table',
  templateUrl: './temperatura-table.component.html',
  styleUrls: ['./temperatura-table.component.sass']
})
export class TemperaturaTableComponent implements OnInit {

  temperaturas: any = [];
  p: number = 1;

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.service.getTemperaturaPersonaId(params.id).subscribe(data => {
      console.log(data);
      this.temperaturas = data;
    },
    err => console.log(err)
    );
  }

}

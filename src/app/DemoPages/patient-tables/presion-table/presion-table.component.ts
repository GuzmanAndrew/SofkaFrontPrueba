import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-presion-table',
  templateUrl: './presion-table.component.html',
  styleUrls: ['./presion-table.component.sass']
})
export class PresionTableComponent implements OnInit {

  presiones: any = [];
  p: number = 1;

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.service.getPresionPersonaId(params.id).subscribe(data => {
      console.log(data);
      this.presiones = data;
    },
    err => console.log(err)
    );
  }

}

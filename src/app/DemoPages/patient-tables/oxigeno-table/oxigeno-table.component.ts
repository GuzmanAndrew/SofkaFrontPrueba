import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-oxigeno-table',
  templateUrl: './oxigeno-table.component.html',
  styleUrls: ['./oxigeno-table.component.sass']
})
export class OxigenoTableComponent implements OnInit {
  
  oxigenos: any = [];
  p: number = 1;

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.service.getOxigenoPersonaId(params.id).subscribe(data => {
      console.log(data);
      this.oxigenos = data;
    },
    err => console.log(err)
    );
  }

}

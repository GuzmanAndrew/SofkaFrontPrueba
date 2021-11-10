import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-presion-chart',
  templateUrl: './presion-chart.component.html',
  styleUrls: ['./presion-chart.component.sass']
})
export class PresionChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Sistolico' },
    { data: [], label: 'Diastolica' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(41,138,28,0.2)',
      borderColor: 'rgba(41,138,28,1)',
      pointBackgroundColor: 'rgba(41,138,28,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(250,227,17,0.2)',
      borderColor: 'rgba(250,227,17,1)',
      pointBackgroundColor: 'rgba(250,227,17,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): any {
    const params = this.activatedRoute.snapshot.params;
    this.service.getPresionPersonaId(params.id).subscribe(data => {
      console.log(data);
      const date = data.map(res => res.fecha);
      data.forEach((res: any, i: any) => {
        this.lineChartData[0].data[i] = res.sistolica;
        this.lineChartData[1].data[i] = res.diastolica;
        this.lineChartLabels.push(date[i]);
      });
    },
    err => console.log(err)
    );
  }
}

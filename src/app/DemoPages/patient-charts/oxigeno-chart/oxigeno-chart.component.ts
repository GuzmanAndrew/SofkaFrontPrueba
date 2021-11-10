import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-oxigeno-chart',
  templateUrl: './oxigeno-chart.component.html',
  styleUrls: ['./oxigeno-chart.component.sass']
})
export class OxigenoChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'SPo2' }
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
      backgroundColor: 'rgba(92,10,240,0.2)',
      borderColor: 'rgba(92,10,240,1)',
      pointBackgroundColor: 'rgba(92,10,240,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): any {
    const params = this.activatedRoute.snapshot.params;
    this.service.getOxigenoPersonaId(params.id).subscribe(data => {
      console.log(data);
      const date = data.map(res => res.fecha);
      data.forEach((res: any, i: any) => {
        this.lineChartData[0].data[i] = res.oxigeno;
        this.lineChartLabels.push(date[i]);
      });
    },
    err => console.log(err)
    );
  }

}

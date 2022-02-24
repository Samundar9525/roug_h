import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {
   multi = [
    {
      "name": "piston1",
      "series": [
        {
          "name": "capacity",
          "value": 1000

        },
      ]
    },

    {
      "name": "piston2",
      "series": [
        {
          "name": "capacity",
          "value": 1000
        },
      ]
    },

    {
      "name": "piston3",
      "series": [
        {
          "name": "capacity",
          "value": 1000
        },
      ]
    },
  ];
  multi2 = [
    {
      "name": "piston1",
      "series": [

        {
          "name": "Pressure",
          "value": 700
        }
      ]
    },

    {
      "name": "piston2",
      "series": [

        {
          "name": "Pressure",
          "value": 500
        }
      ]
    },

    {
      "name": "piston3",
      "series": [
        {
          "name": "Pressure",
          "value": 900
        }
      ]
    },
  ];

  multi3 = [
    {
      "name": "piston1",
      "series": [
        {
          "name": "capacity",
          "value": 1000
        },
        {
          "name": "Pressure",
          "value": 700
        }
      ]
    },

    {
      "name": "piston2",
      "series": [
        {
          "name": "capacity",
          "value": 1000
        },
        {
          "name": "Pressure",
          "value": 500
        }
      ]
    },

    {
      "name": "piston3",
      "series": [
        {
          "name": "capacity",
          "value": 1000
        },
        {
          "name": "Pressure",
          "value": 700
        }
      ]
    },
  ];



  view: [number, number] = [300, 200];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = '';
  animations: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };


  constructor() {
    Object.assign(this, { res:this.multi });
    Object.assign(this, { res2:this.multi2 });
    Object.assign(this, { res3:this.multi2 });
   }

  ngOnInit(): void {

  }
  onSelect(event: any) {
    console.log(event);
  }

}

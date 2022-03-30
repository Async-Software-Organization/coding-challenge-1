import { Component, Input, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "time-series",
  templateUrl: "./time-series.component.html",
  styleUrls: ["./time-series.component.scss"]
})
export class TimeSeriesComponent {
  public lineChartType: ChartType = "line";
  public lineChartData: ChartConfiguration["data"] = {
    datasets: [],
    labels: []
  };

  public lineChartOptions: ChartConfiguration["options"] = {
    responsive: true,

    elements: {
      line: {
        tension: 0.2,
        borderWidth: 1
      },
      point: {
        pointStyle: "circle",
        radius: 1.5,
        hoverRadius: 0,
        borderWidth: 0,
        hoverBorderWidth: 0
      }
    },
    scales: {
      x: {},
      "y-axis-0": {
        position: "left"
      }
    },
    plugins: {
      legend: {
        display: true
      },
      filler: {
        propagate: true
      }
    }
  };

  @Input() title: string;

  // TODO: Give time-series-data a type
  @Input() set inputData(data: any[]) {
    if (data && data.length > 0) {
      data.map(value => {
        this.lineChartData.datasets.push({
          data: [...value], // TODO: Correct time-series-data value using the type
          label: "data",
          backgroundColor: "rgba(17, 54, 89,0.1)",
          borderColor: "#113659",
          pointBackgroundColor: "#113659",
          pointBorderColor: "#fff",
          pointHoverBorderColor: "#fff",
          fill: "origin"
        });

        this.lineChartData.labels = [...value]; // TODO: Add labels
      });
    }
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() {
    this.title = "";
  }
}

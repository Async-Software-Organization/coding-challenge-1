import { TimeSeriesComponent } from "./time-series/time-series.component";
import { NgChartsModule } from "ng2-charts";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../../shared";

@NgModule({
  exports: [TimeSeriesComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgChartsModule, MaterialModule],
  declarations: [TimeSeriesComponent]
})
export class ComponentsModule {}

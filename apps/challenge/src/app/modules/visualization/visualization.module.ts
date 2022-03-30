import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VisualizationRoutingModule } from "./visualization-routing.module";
import { VisualizationComponent } from "./visualization.component";
import { ComponentsModule } from "./components/components.module";
import { MaterialModule } from "../../shared";

@NgModule({
  declarations: [VisualizationComponent],
  imports: [CommonModule, VisualizationRoutingModule, ComponentsModule, MaterialModule]
})
export class VisualizationModule {}

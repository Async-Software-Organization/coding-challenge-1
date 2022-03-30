import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "visualization",
    loadChildren: () => import("./visualization/visualization.module").then(m => m.VisualizationModule)
  },
  { path: "", redirectTo: "visualization", pathMatch: "full" },

  { path: "**", redirectTo: "visualization", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "education", component: EducationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

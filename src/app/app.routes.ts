import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { AboutComponent } from "./pages/about/about.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "about", component: AboutComponent },
];

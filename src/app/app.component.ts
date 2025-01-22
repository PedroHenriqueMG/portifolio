import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavlinkComponent } from "./components/navlink/navlink.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavlinkComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "portifolio";
}

import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { NavlinkComponent } from "./components/navlink/navlink.component";
import { ContactButtonComponent } from "./components/contact-button/contactButton.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavlinkComponent, ContactButtonComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  currentPath: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
    });
  }

  isActive(): string {
    if (this.currentPath === "/") {
      return "bg-inactive";
    }

    return "bg-active";
  }
}

import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "nav-link",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./navlink.component.html",
  styleUrl: "./navlink.component.scss",
})
export class NavlinkComponent implements OnInit {
  currentPath: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
    });
  }

  getSvgColor(path: string): string {
    switch (path) {
      case "home":
        return this.currentPath === "/" ? "#6F6FD6" : "#2D2F4A";

      case "projects":
        return this.currentPath === "/projects" ? "#6F6FD6" : "#2D2F4A";

      case "contact":
        return this.currentPath === "/contact" ? "#6F6FD6" : "#2D2F4A";

      case "about":
        return this.currentPath === "/about" ? "#6F6FD6" : "#2D2F4A";
    }

    return this.currentPath === "/" ? "#6F6FD6" : "#2D2F4A";
  }
}

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
  isHome = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;

      if (this.currentPath === "/") {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
    });
  }

  getSvgColor(path: string): string {
    if (this.isHome) {
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
    }

    switch (path) {
      case "home":
        return this.currentPath === "/" ? "#6F6FD6" : "#F2F7FF";

      case "projects":
        return this.currentPath === "/projects" ? "#6F6FD6" : "#F2F7FF";

      case "contact":
        return this.currentPath === "/contact" ? "#6F6FD6" : "#F2F7FF";

      case "about":
        return this.currentPath === "/about" ? "#6F6FD6" : "#F2F7FF";
    }

    return "#F2F7FF";
  }

  isActive(): string {
    if (this.currentPath !== "/") {
      return "bg-secundary";
    }

    return "bg-primary";
  }
}

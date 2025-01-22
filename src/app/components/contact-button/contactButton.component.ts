import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "contact-button",
  standalone: true,
  imports: [],
  templateUrl: "./contactButton.component.html",
  styleUrl: "./contactButton.component.scss",
})
export class ContactButtonComponent implements OnInit {
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
}

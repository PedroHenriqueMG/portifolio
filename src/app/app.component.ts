import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactPopUpComponent } from "./components/contact-popup/contactPopUp.component";
import { ContactPopupService } from "./services/contact-popup.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ContactPopUpComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  currentPath: string = "";

  constructor(
    private router: Router,
    public contactPopupService: ContactPopupService
  ) {}

  get showContactPopup$() {
    return this.contactPopupService.showPopup$;
  }

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

  closeContactPopup() {
    this.contactPopupService.closePopup();
  }
}

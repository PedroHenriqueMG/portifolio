import { Component } from "@angular/core";
import { ContactPopupService } from "../../services/contact-popup.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  constructor(private contactPopupService: ContactPopupService) {}

  openContactPopup() {
    this.contactPopupService.openPopup();
  }
}

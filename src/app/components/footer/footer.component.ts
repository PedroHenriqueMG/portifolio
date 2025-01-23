import { Component } from "@angular/core";
import { NavlinkComponent } from "../navlink/navlink.component";
import { ContactButtonComponent } from "../contact-button/contactButton.component";

@Component({
  selector: "footer",
  standalone: true,
  imports: [NavlinkComponent, ContactButtonComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {}

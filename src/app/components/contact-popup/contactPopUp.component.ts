import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "contact-popup",
  standalone: true,
  imports: [],
  templateUrl: "./contactPopUp.component.html",
  styleUrl: "./contactPopUp.component.scss",
})
export class ContactPopUpComponent {
  @Output() close = new EventEmitter<void>();
}

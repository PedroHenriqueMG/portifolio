import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactPopupService {
  private showPopupSubject = new BehaviorSubject<boolean>(false);
  showPopup$ = this.showPopupSubject.asObservable();

  openPopup() {
    this.showPopupSubject.next(!this.showPopupSubject.value);
  }

  closePopup() {
    this.showPopupSubject.next(false);
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  downloadResume() {
    const resumeURL = "../../assets/Curriculo.pdf";

    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "pedro-resume.pdf";
    link.click();
  }
}

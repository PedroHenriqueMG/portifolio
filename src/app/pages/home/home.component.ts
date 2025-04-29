import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  typedText = "";
  fullText = `Olá, me chamo Pedro Henrique,<br>sou Engenheiro de Software, seja bem-vindo ao meu portifólio!<br> Fique a vontade para navegar pelo site!`;
  isScroll = false;
  hasStartedTyping = false;

  ngOnInit(): void {}

  startTyping(): void {
    if (this.hasStartedTyping) return;
    this.hasStartedTyping = true;

    let index = 0;
    const interval = setInterval(() => {
      if (index < this.fullText.length) {
        this.typedText += this.fullText[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
  scrollDown(teste: Event) {
    const target = teste.target as HTMLDivElement;
    if (target.scrollTop > 60) {
      this.isScroll = true;
      this.startTyping();
    } else {
      this.isScroll = false;
    }
  }
}

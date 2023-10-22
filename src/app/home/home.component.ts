import { Component, ElementRef, Renderer2, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {}

  scrollToSection(sectionId: string) {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}

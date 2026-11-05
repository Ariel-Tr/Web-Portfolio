import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    // document only exists in the browser, not during prerendering
    if (!isPlatformBrowser(this.platformId)) return;

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      // Cast item to HTMLElement to access the style property
      (item as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }
}

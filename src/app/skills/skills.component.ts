import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      // Cast item to HTMLElement to access the style property
      (item as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    'JavaScript',
    'Angular',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    // Add more skills here
  ];

  constructor() { }

  ngOnInit(): void {
  }
}


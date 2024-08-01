import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: 'path/to/image1.jpg',
      link: 'http://link-to-project1.com'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: 'path/to/image2.jpg',
      link: 'http://link-to-project2.com'
    }
    // Add more projects here
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

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
      title: 'Encryption algorythms Project',
      description: 'a Python based encryption script with a GUI',
      image: './images.jpeg',
      link: './Encryption.zip'
    }
    // Add more projects here
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

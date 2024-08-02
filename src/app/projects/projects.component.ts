import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Encryption algorythms Project',
      description: 'a Python based encryption script',
      image: './images.jpeg',
      link: './Encryption.zip'
    }
    // Add more projects here
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

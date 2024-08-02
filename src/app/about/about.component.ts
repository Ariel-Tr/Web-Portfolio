import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  downloadFile() {
    const fileUrl = './Ariël R CV.pdf'; // Path to your file in the assets directory
    const fileName = 'Ariël R. Truter CV.pdf'; // Desired file name

    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

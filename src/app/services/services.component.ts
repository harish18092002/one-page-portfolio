import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  projects = [
    {
      title: 'Project 1',
      imageUrl: '../../assets/Projects/Screenshot 2023-09-24 193528.png',
      description: 'An Angular-powered Customer Contact Management System, offering secure login with UUID and efficient contact storage via local storage, with seamless pagination for enhanced usability',
      technologies: 'Angular,Firebase',
      link: 'https://github.com/harish18092002/Network.git'
    },
    {
      title: 'Project 2',
      imageUrl: '../../assets/Projects/Screenshot 2023-09-22 203036.png',
      description: 'A dynamic website with real-time full-screen color changing functionality, adding vibrancy to your online experience',
      link: '',
      technologies: 'HTML,CSS,JS'
    },
    {
      title: 'Project 3',
      imageUrl: '../../assets/Projects/API project.png',
      description: 'Built three Node.js APIs for PostgreSQL using HTTP, Postman, and Insomnia: one retrieves records, the second creates and inserts new entries into the database, enhancing data management capabilities.',
      link: 'https://github.com/harish18092002/secret-of-happiness1.git',
      technologies: 'PostgreSQL,HTTP, Postman,NodeJs'
    },
    {
      title: 'Project 4',
      imageUrl: '../../assets/Projects/potfolio.png',
      description: 'Description for Project 4',
      link: 'https://portfolio18092002.web.app/home',
      technologies: 'Angular,Firebase,NodeJs'
    },


  ];


}

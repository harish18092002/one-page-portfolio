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
      description: 'Description for Project 1',
      link: 'https://github.com/harish18092002/Network.git'
    },
    {
      title: 'Project 2',
      imageUrl: '../../assets/Projects/Screenshot 2023-09-22 203036.png',
      description: 'Description for Project 2',
      link: ''
    },
    {
      title: 'Project 3',
      imageUrl: '../../assets/Projects/API project.png',
      description: 'Description for Project 3',
      link: 'https://github.com/harish18092002/secret-of-happiness1.git'
    },
    {
      title: 'Project 4',
      imageUrl: '../../assets/Projects/potfolio.png',
      description: 'Description for Project 4',
      link: 'https://portfolio18092002.web.app/home'
    },


  ];


}

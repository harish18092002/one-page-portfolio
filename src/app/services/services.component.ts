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
      imageUrl: '../../assets/certificates/pals.jpg',
      description: 'Description for Project 1'
    },
    {
      title: 'Project 2',
      imageUrl: '../../assets/certificates/Wc intern_page-0001.jpg',
      description: 'Description for Project 2'
    },
    {
      title: 'Project 3',
      imageUrl: '../../assets/certificates/prathyusha.jpg',
      description: 'Description for Project 3'
    },
    {
      title: 'Project 4',
      imageUrl: '../../assets/certificates/guvi ai.png',
      description: 'Description for Project 4'
    },


  ];


}

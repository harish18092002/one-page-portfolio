import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  certificates = [
    {
      title: 'Certificate 1',
      imageUrl: '../../assets/certificates/pals.jpg',
      description: 'Description for Certificate 1'
    },
    {
      title: 'Certificate 2',
      imageUrl: '../../assets/certificates/Wc intern_page-0001.jpg',
      description: 'Description for Certificate 2'
    },
    {
      title: 'Certificate 3',
      imageUrl: '../../assets/certificates/prathyusha.jpg',
      description: 'Description for Certificate 3'
    },
    {
      title: 'Certificate 4',
      imageUrl: '../../assets/certificates/guvi ai.png',
      description: 'Description for Certificate 4'
    },
    {
      title: 'Certificate 5',
      imageUrl: '../../assets/certificates/webinar certificate_page-0001.jpg',
      description: 'Description for Certificate 5'
    },
    {
      title: 'Certificate 6',
      imageUrl: '../../assets/certificates/Guvi world record.png',
      description: 'Description for Certificate 6'
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
  certificates = [
    {
      title: 'Certificate 1',
      imageUrl: '../../assets/certificates/pals.jpg',
      description: 'Description for Certificate 1',
      alt: 'Certificate of being a finalist in the PALS Innowah competition conducted by IIT Madras'
    },
    {
      title: 'Certificate 2',
      imageUrl: '../../assets/certificates/Wc intern_page-0001.jpg',
      description: 'Description for Certificate 2',
      alt: 'Certificate of being completing my internship'

    },
    {
      title: 'Certificate 3',
      imageUrl: '../../assets/certificates/prathyusha.jpg',
      description: 'Description for Certificate 3',
      alt: 'Certificate of being Participating in Hackathon'

    },
    {
      title: 'Certificate 4',
      imageUrl: '../../assets/certificates/guvi ai.png',
      description: 'Description for Certificate 4',
      alt: 'Certificate of being Participating in Guvi AI hackathon'

    },
    {
      title: 'Certificate 5',
      imageUrl: '../../assets/certificates/webinar certificate_page-0001.jpg',
      description: 'Description for Certificate 5',
      alt: 'Certificate of attending webinar on AI and Machine Learning'

    },
    {
      title: 'Certificate 6',
      imageUrl: '../../assets/certificates/Guvi world record.png',
      description: 'Description for Certificate 6',
      alt: 'Certificate of Guvi World Record'
    },

  ];
}


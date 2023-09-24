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
    // {
    //   title: 'Certificate 7',
    //   imageUrl: '../../assets/certificates/Gl android app dev_page-0001.jpg',
    //   description: 'Description for Certificate 7'
    // },
    // {
    //   title: 'Certificate 8',
    //   imageUrl: '../../assets/certificates/Internshala app dev_page-0001.jpg',
    //   description: 'Description for Certificate 8'
    // },
    // {
    //   title: 'Certificate 9',
    //   imageUrl: '../../assets/certificates/gl Android studio_page-0001.jpg',
    //   description: 'Description for Certificate 9'
    // },
    // {
    //   title: 'Certificate 10',
    //   imageUrl: '../../assets/certificates/Internshala Core Java_page-0001.jpg',
    //   description: 'Description for Certificate 10'
    // },
    // {
    //   title: 'Certificate 11',
    //   imageUrl: '../../assets/certificates/gl ethical hack_page-0001.jpg',
    //   description: 'Description for Certificate 11'
    // },
    // {
    //   title: 'Certificate 12',
    //   imageUrl: '../../assets/certificates/Internshala Ethical Hacking_page-0001.jpg',
    //   description: 'Description for Certificate 12'
    // },
    // {
    //   title: 'Certificate 13',
    //   imageUrl: '../../assets/certificates/GL Mobile pentesting_page-0001.jpg',
    //   description: 'Description for Certificate 13'
    // },
    // {
    //   title: 'Certificate 14',
    //   imageUrl: '../../assets/certificates/Internshala Internship & Job Preparation_page-0001.jpg',
    //   description: 'Description for Certificate 14'
    // },
    // {
    //   title: 'Certificate 15',
    //   imageUrl: '../../assets/certificates/Internshala non-tech intern_page-0001.jpg',
    //   description: 'Description for Certificate 15'
    // },
  ];
}


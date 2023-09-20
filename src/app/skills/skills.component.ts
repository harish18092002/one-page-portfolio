import { Component } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedCategory: string = 'All';

  // Define your images directly in the component
  images: any[] = [

    // for language

    { name: 'JS', category: 'Languages', src: 'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png' },
    { name: 'Java', category: 'Languages', src: 'https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png' },
    { name: 'Kotlin', category: 'Languages', src: 'https://user-images.githubusercontent.com/25181517/185062810-7ee0c3d2-17f2-4a98-9d8a-a9576947692b.png' },
    { name: 'C++', category: 'Languages', src: 'https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png' },
    { name: 'Python', category: 'Languages', src: 'https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png' },
    { name: 'Typescript', category: 'Languages', src: 'https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png' },

    // for front-end

    { name: 'HTML', category: 'Front-End', src: 'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png' },
    { name: 'CSS', category: 'Front-End', src: 'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png' },
    { name: 'Bootstrap', category: 'Front-End', src: 'https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png' },
    { name: 'Tailwind CSS', category: 'Front-End', src: 'https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png' },
    { name: 'flutter', category: 'Front-End', src: 'https://user-images.githubusercontent.com/25181517/186150365-da1eccce-6201-487c-8649-45e9e99435fd.png' },

    // for back-end 

    { name: 'Nodejs', category: 'Back-End', src: 'https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png' },
    { name: 'Express', category: 'Back-End', src: 'https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png' },
    { name: 'HTTP', category: 'Back-End', src: 'https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png' },

    // for database

    { name: 'Mysql', category: 'Database', src: 'https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png' },
    { name: 'Postgresql', category: 'Database', src: 'https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png' },
    { name: 'oracle', category: 'Database', src: 'https://user-images.githubusercontent.com/25181517/117208736-bdedc080-adf5-11eb-912f-61c7d43705f6.png' },
    { name: 'firebase', category: 'Database', src: 'https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png' },
    // for tools and frameworks

    { name: 'Git', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png' },
    { name: 'Intellij', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/192108890-200809d1-439c-4e23-90d3-b090cf9a4eea.png' },
    { name: 'Android studio', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/192108895-20dc3343-43e3-4a54-a90e-13a4abbc57b9.png' },
    { name: 'vscode', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png' },
    { name: 'Eclipse', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/192108892-6e9b5cdf-4e35-4a70-ad9a-801a93a07c1c.png' },
    { name: 'postman', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png' },
    { name: 'figma', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png' },
    { name: 'material design', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/189716058-71f74b6f-5936-40b5-92e3-00381e35ccb9.png' },
    { name: 'material ui ', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png' },
    { name: 'npm', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png' },
    { name: 'angular', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png' },
    { name: 'vuejs', category: 'Tools', src: 'https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png' },
  ];

  filterImages(category: string): void {
    this.selectedCategory = category;
  }

}

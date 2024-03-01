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

    { name: 'JS', category: 'Languages', src: '../../assets/skills/js.png' },
    { name: 'Java', category: 'Languages', src: '../../assets/skills/java.png' },
    { name: 'Kotlin', category: 'Languages', src: '../../assets/skills/kotlin.png' },
    { name: 'C++', category: 'Languages', src: '../../assets/skills/c++.png' },
    { name: 'Python', category: 'Languages', src: '../../assets/skills/python.png' },
    { name: 'Typescript', category: 'Languages', src: '../../assets/skills/ts.png' },

    // for front-end

    { name: 'HTML', category: 'Front-End', src: '../../assets/skills/html.png' },
    { name: 'CSS', category: 'Front-End', src: '../../assets/skills/css.png' },
    { name: 'GSAP', category: 'Front-End', src: '../../assets/skills/gsap-greensock.svg' },

    { name: 'Bootstrap', category: 'Front-End', src: '../../assets/skills/bootstrp.png' },
    { name: 'Tailwind CSS', category: 'Front-End', src: '../../assets/skills/tailwindcss.png' },
    { name: 'flutter', category: 'Front-End', src: '../../assets/skills/flutter.png' },
    { name: 'dart', category: 'Front-End', src: '../../assets/skills/dart.png' },

    // for back-end 

    { name: 'Nodejs', category: 'Back-End', src: '../../assets/skills/node.png' },
    { name: 'Express', category: 'Back-End', src: '../../assets/skills/express.png' },
    { name: 'HTTP', category: 'Back-End', src: '../../assets/skills/http.png' },

    // for database

    { name: 'Mysql', category: 'Database', src: '../../assets/skills/mysql.png' },
    { name: 'Postgresql', category: 'Database', src: '../../assets/skills/postgresql.png' },
    // { name: 'oracle', category: 'Database', src: '../../assets/skills/html.png' },
    { name: 'firebase', category: 'Database', src: '../../assets/skills/firebase.png' },
    // for tools and frameworks

    { name: 'Git', category: 'Tools', src: '../../assets/skills/git.png' },
    { name: 'Intellij', category: 'Tools', src: '../../assets/skills/intelij.png' },
    { name: 'Android studio', category: 'Tools', src: '../../assets/skills/androidstudio.png' },
    { name: 'vscode', category: 'Tools', src: '../../assets/skills/vscode.png' },
    { name: 'Eclipse', category: 'Tools', src: '../../assets/skills/eclipse.png' },
    { name: 'postman', category: 'Tools', src: '../../assets/skills/postman.png' },
    { name: 'figma', category: 'Tools', src: '../../assets/skills/figma.png' },
    { name: 'material design', category: 'Tools', src: '../../assets/skills/materialdesign.png' },
    { name: 'material ui ', category: 'Tools', src: '../../assets/skills/materialui.png' },
    { name: 'npm', category: 'Tools', src: '../../assets/skills/npm.png' },
    { name: 'angular', category: 'Tools', src: '../../assets/skills/angular.png' },
    { name: 'Arduino', category: 'Tools', src: '../../assets/skills/arduino.png' },
    { name: 'vuejs', category: 'Tools', src: '../../assets/skills/vue.png' },
    { name: 'github', category: 'Tools', src: '../../assets/skills/github.png' },
    { name: 'linux', category: 'Tools', src: '../../assets/skills/linux.png' },

  ];

  filterImages(category: string): void {
    this.selectedCategory = category;
  }

}

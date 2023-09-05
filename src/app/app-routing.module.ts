import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'achievements', component: CertificationComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'header' }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

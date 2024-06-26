import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    SkillsComponent,
    CertificationComponent,
    ContactComponent,
    TimelineComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

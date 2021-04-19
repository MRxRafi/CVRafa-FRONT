import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { CcpatternsComponent } from './skills/ccpatterns/ccpatterns.component';
import { FrameworksComponent } from './skills/frameworks/frameworks.component';
import { DevopsComponent } from './skills/devops/devops.component';
import {LanguageService} from './shared/language.service';
import {WithLanguageComponent} from './shared/with-language.component';
import { OverviewComponent } from './skills/overview/overview.component';
import { MethodologiesComponent } from './skills/methodologies/methodologies.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    NotFoundComponent,
    LandscapeComponent,
    CcpatternsComponent,
    FrameworksComponent,
    DevopsComponent,
    WithLanguageComponent,
    OverviewComponent,
    MethodologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

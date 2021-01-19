import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CcpatternsComponent} from './skills/ccpatterns/ccpatterns.component';
import {FrameworksComponent} from './skills/frameworks/frameworks.component';
import {DevopsComponent} from './skills/devops/devops.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'skills/ccpatterns', component: CcpatternsComponent },
  { path: 'skills/frameworks', component: FrameworksComponent },
  { path: 'skills/devops', component: DevopsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/notFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

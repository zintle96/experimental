import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CastteamComponent } from './components/castteam/castteam.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "about", component: AboutComponent},
  { path: "castR", component: CastteamComponent},
  {path: "home", component: LandingPageComponent},
  {path:"coming",component:UpcomingComponent},
  { path: "signup", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

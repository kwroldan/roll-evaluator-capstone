import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedWeaponsComponent } from './featured-weapons/featured-weapons.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },{
    path: 'featured-weapons',
    component: FeaturedWeaponsComponent
  // },{
  //   path: 'roll-evaluator',
  //   // component:
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

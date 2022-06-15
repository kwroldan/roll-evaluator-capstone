import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityPicksComponent } from './community-picks/community-picks.component';
import { FeaturedWeaponsComponent } from './featured-weapons/featured-weapons.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RollEvaluatorComponent } from './roll-evaluator/roll-evaluator.component';
import { WeaponPageComponent } from './weapon-page/weapon-page.component';

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
  },{
    path: 'roll-evaluator',
    component: RollEvaluatorComponent
  },{
    path: 'featured-weapons/:name',
    component: WeaponPageComponent
  },{
    path: 'community-picks',
    component: CommunityPicksComponent
  },{
    path: '404',
    component: PageNotFoundComponent
  },{
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

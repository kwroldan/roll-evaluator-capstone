import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedWeaponsComponent } from './featured-weapons/featured-weapons.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RollEvaluatorComponent } from './roll-evaluator/roll-evaluator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeaponPageComponent } from './weapon-page/weapon-page.component';
import { WeaponListingComponent } from './weapon-listing/weapon-listing.component';
import { FormsModule } from '@angular/forms';
import { EvaluatorFormComponent } from './evaluator-form/evaluator-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommunityPicksComponent } from './community-picks/community-picks.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedWeaponsComponent,
    LandingPageComponent,
    NavBarComponent,
    RollEvaluatorComponent,
    PageNotFoundComponent,
    WeaponPageComponent,
    WeaponListingComponent,
    EvaluatorFormComponent,
    CommunityPicksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgxMatSelectSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

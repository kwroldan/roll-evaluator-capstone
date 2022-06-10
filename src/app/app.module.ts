import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedWeaponsComponent } from './featured-weapons/featured-weapons.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RollEvaluatorComponent } from './roll-evaluator/roll-evaluator.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedWeaponsComponent,
    LandingPageComponent,
    NavBarComponent,
    RollEvaluatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

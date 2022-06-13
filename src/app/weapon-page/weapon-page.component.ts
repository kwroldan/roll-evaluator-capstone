import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { Weapon } from '../models';

@Component({
  selector: 'app-weapon-page',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.scss']
})
export class WeaponPageComponent implements OnInit {
  weapon?: Weapon;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private featuredWeaponService: FeaturedWeaponService
  ) {}

  name = String(this.route.snapshot.paramMap.get("name"));
  ngOnInit(){
    this.getWeapon()
  }

  getWeapon(){
    this.featuredWeaponService.fetchWeaponsByName(this.name).subscribe(response =>
      this.weapon = response)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { Weapon, WeaponStats, StatsResponse } from '../models';

@Component({
  selector: 'app-weapon-page',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.scss']
})
export class WeaponPageComponent implements OnInit {
  weapon?: Weapon;
  stats?: WeaponStats;
  weaponImpact?: number;
  // weaponRange?: number;
  // weaponStability?: number;
  // weaponHandling?: number;
  // weaponReloadSpeed?: number;
  // weaponMagazine?: number;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private featuredWeaponService: FeaturedWeaponService
  ) { }

  name = String(this.route.snapshot.paramMap.get("name"));

  ngOnInit() {
    this.getWeapon()
    this.getStats("Austringer");
  }

  getWeapon() {
    this.featuredWeaponService.fetchWeaponsByName(this.name).subscribe(response =>
      this.weapon = response)
  }

  getStats(name: string) {
    return this.featuredWeaponService.fetchStatsByWeaponName(name)
      .subscribe(response =>
        this.stats = response.Response.stats.stats)
  }
}

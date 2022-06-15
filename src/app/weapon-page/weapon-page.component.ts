import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { Weapon, WeaponStats, ApiResponse } from '../models';

@Component({
  selector: 'app-weapon-page',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.scss']
})
export class WeaponPageComponent implements OnInit {
  weapon?: Weapon;
  stats?: WeaponStats;
  weaponImpact?: number;
  weaponRange?: number;
  weaponStability?: number;
  weaponHandling?: number;
  weaponReloadSpeed?: number;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private featuredWeaponService: FeaturedWeaponService
  ) { }

  name = String(this.route.snapshot.paramMap.get("name"));

  ngOnInit() {
    this.getWeapon()
  }

  getWeapon() {
    this.featuredWeaponService.fetchWeaponsByName(this.name).subscribe(response =>
      this.weapon = response)
  }

  getStats(name: string) {
    this.featuredWeaponService.fetchStatsByWeaponName(name).subscribe(response =>
        this.stats = response.Response.stats.stats
      )
    this.weaponImpact = this.stats![4043523819].value
    this.weaponRange = this.stats![1240592695].value
    this.weaponStability = this.stats![155624089].value
    this.weaponHandling = this.stats![943549884].value
    this.weaponReloadSpeed = this.stats![4188031367].value
  }
}

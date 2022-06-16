import { Component, OnInit } from '@angular/core';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { Weapon } from '../models';

@Component({
  selector: 'app-featured-weapons',
  templateUrl: './featured-weapons.component.html',
  styleUrls: ['./featured-weapons.component.scss']
})

export class FeaturedWeaponsComponent implements OnInit {
  weapons: Weapon[] = [];

  constructor(private featuredWeaponService: FeaturedWeaponService) {}

  ngOnInit(): void {
    this.featuredWeaponService.fetchWeapons().subscribe(response => {
      this.weapons = response.weapons
    })
  }

}

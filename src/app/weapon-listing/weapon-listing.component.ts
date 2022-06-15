import { Component, Input, OnInit } from '@angular/core';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { ActivatedRoute } from '@angular/router';
import { WeaponStats } from '../models';

@Component({
  selector: 'app-weapon-listing',
  templateUrl: './weapon-listing.component.html',
  styleUrls: ['./weapon-listing.component.scss']
})
export class WeaponListingComponent implements OnInit {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() preferredCombo!: string;
  @Input() comboDescription!: string;
  @Input() bungieHash!: number;

  stats?: WeaponStats;
  statsRevealed = false;
  weaponImpact?: number;
  weaponRange?: number;
  weaponStability?: number;
  weaponHandling?: number;
  weaponReloadSpeed?: number;
  weaponMagazine?: number;


  constructor(
    private route: ActivatedRoute,
    private featuredWeaponService: FeaturedWeaponService
  ) { }

  ngOnInit() {
    this.getStats(this.name)
  }

  toggleStats() {
    if (this.statsRevealed === false) {
      this.statsRevealed = true
    } else {
      this.statsRevealed = false
    }
    this.weaponImpact = this.stats![4043523819].value
    this.weaponRange = this.stats![1240592695].value
    this.weaponStability = this.stats![155624089].value
    this.weaponHandling = this.stats![943549884].value
    this.weaponReloadSpeed = this.stats![4188031367].value
    this.weaponMagazine = this.stats![3871231066].value
  }

  getStats(name: string) {
    this.featuredWeaponService.fetchStatsByWeaponName(name).subscribe(response =>
        this.stats = response.Response.stats.stats
    )
  }

}

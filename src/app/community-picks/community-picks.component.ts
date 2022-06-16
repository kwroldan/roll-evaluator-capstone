import { Component, OnInit } from '@angular/core';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { Weapon, Pick } from '../models';

@Component({
  selector: 'app-community-picks',
  templateUrl: './community-picks.component.html',
  styleUrls: ['./community-picks.component.scss']
})
export class CommunityPicksComponent implements OnInit {
  picks: Pick[] = [];

  constructor(private featuredWeaponService: FeaturedWeaponService) {}

  formRevealed = false;

  toggleForm() {
    if (this.formRevealed === false) {
      this.formRevealed = true
    } else {
      this.formRevealed = false;
    }
  }

  addCommunityPick(newPick: Pick) {
    console.log(newPick)
    return this.featuredWeaponService.addCommunityPick(newPick).subscribe
      (response => {
        this.picks = [ ...this.picks, response.pick]
    })
  }

  reloadPage() {
    window.location.reload()
  }

  ngOnInit(): void {
    this.featuredWeaponService.fetchCommunityPicks().subscribe(response => {
      this.picks = response.picks
    })
  }

}

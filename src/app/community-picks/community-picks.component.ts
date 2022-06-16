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

  addFormRevealed = false;
  editFormRevealed = false;

  toggleAddForm() {
    if (this.addFormRevealed === false) {
      this.addFormRevealed = true
    } else {
      this.addFormRevealed = false;
    }
  }

  toggleEditForm() {
    if (this.editFormRevealed === false) {
      this.editFormRevealed = true
    } else {
      this.editFormRevealed = false;
    }
  }

  addCommunityPick(newPick: Pick) {
    console.log(newPick)
    return this.featuredWeaponService.addCommunityPick(newPick).subscribe
      (response => {
        this.picks = [ ...this.picks, response.pick]
    })
  }

  editCommunityPick(updatedPick: Pick) {
    console.log(updatedPick)
    this.featuredWeaponService.editCommunityPick(updatedPick)
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

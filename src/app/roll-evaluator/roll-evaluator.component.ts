import { Component, OnInit } from '@angular/core';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { Weapon } from '../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-roll-evaluator',
  templateUrl: './roll-evaluator.component.html',
  styleUrls: ['./roll-evaluator.component.scss']
})
export class RollEvaluatorComponent implements OnInit {
  weapons: Weapon[] = [];

  constructor(private featuredWeaponService: FeaturedWeaponService) { }

  ngOnInit(): void {
    this.featuredWeaponService.fetchWeapons().subscribe(response => {
      this.weapons = response.weapons
      console.log(this.weapons)
    })
  }

}

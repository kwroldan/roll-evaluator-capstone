import { Component, OnInit } from '@angular/core';
import { FeaturedWeaponService } from '../featured-weapon.service';
import { Weapon, Trait } from '../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-roll-evaluator',
  templateUrl: './roll-evaluator.component.html',
  styleUrls: ['./roll-evaluator.component.scss']
})
export class RollEvaluatorComponent implements OnInit {
  weapons: Weapon[] = [];
  traits: Trait[] = [];

  constructor(private featuredWeaponService: FeaturedWeaponService) { }

  ngOnInit(): void {
    this.featuredWeaponService.fetchWeapons().subscribe(response => {
      this.weapons = response.weapons
    })
    this.featuredWeaponService.fetchTraits().subscribe(response => {
      this.traits = response.traits
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Weapon, Trait } from '../models';
import { FeaturedWeaponService } from '../featured-weapon.service';

@Component({
  selector: 'app-evaluator-form',
  templateUrl: './evaluator-form.component.html',
  styleUrls: ['./evaluator-form.component.scss']
})
export class EvaluatorFormComponent implements OnInit {
  weapons: Weapon[] = [];
  traits: Trait[] = [];

  selectedWeapon?: Weapon;
  selectedFirstTrait?: Trait;
  selectedSecondTrait?: Trait;
  pveScore?: number;
  pvpScore?: number;

  evaluate(values: any){
    this.selectedWeapon = this.weapons.find(weapon => weapon.name === values.weapon)
    this.selectedFirstTrait = this.traits.find(trait => trait.name === values.firstTrait)
    this.selectedSecondTrait = this.traits.find(trait => trait.name === values.secondTrait)
    this.pveScore = this.calculatePveRating(this.selectedFirstTrait!, this.selectedSecondTrait!)
    this.pvpScore = this.calculatePvpRating(this.selectedFirstTrait!, this.selectedSecondTrait!)
  }

  calculatePveRating(firstTrait: Trait, secondTrait: Trait){
    return firstTrait.pveRating + secondTrait.pveRating
  }

  calculatePvpRating(firstTrait: Trait, secondTrait: Trait){
    return firstTrait.pvpRating + secondTrait.pvpRating
  }

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

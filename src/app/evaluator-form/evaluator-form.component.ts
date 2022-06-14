import { Component, OnInit } from '@angular/core';
import { Weapon } from '../models';
import { FeaturedWeaponService } from '../featured-weapon.service';

@Component({
  selector: 'app-evaluator-form',
  templateUrl: './evaluator-form.component.html',
  styleUrls: ['./evaluator-form.component.scss']
})
export class EvaluatorFormComponent implements OnInit {
  weapons: Weapon[] = [];

  updateTraits(){
    
  }

  evaluate(values: any){
    const weapon = values.weapon
    const firstTrait = values.firstTrait
    const secondTrait = values.secondTrait
    console.log(weapon, firstTrait, secondTrait)
  }

  constructor(private featuredWeaponService: FeaturedWeaponService) { }

  ngOnInit(): void {
    this.featuredWeaponService.fetchWeapons().subscribe(response => {
      this.weapons = response.weapons
      console.log(this.weapons)
    })
  }
}

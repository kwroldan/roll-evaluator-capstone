import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Weapon } from './models';

@Injectable({
  providedIn: 'root'
})
export class FeaturedWeaponService {
  weapons: Weapon[] = [{
    name: "Calus Mini-Tool",
    imageUrl: "https://user-images.githubusercontent.com/98148778/172660332-410bc37b-7ca0-4804-ae22-2f632f56b0b5.jpg",
    firstTrait: "Grave Robber",
    secondTrait: "Incadescent"
  },{
    name: "Austringer",
    imageUrl: "https://user-images.githubusercontent.com/98148778/172661212-f5605294-79f8-43a9-aad6-41c8acdf8797.jpg",
    firstTrait: "Outlaw",
    secondTrait: "Rampage"
  },{
    name: "Lingering Dread",
    imageUrl: "https://user-images.githubusercontent.com/98148778/172661388-63661292-d576-403d-a438-0aeba24d5729.jpg",
    firstTrait: "Autoloading Holster",
    secondTrait: "Harmony"
  },{
    name: "Hollow Denial",
    imageUrl: "https://user-images.githubusercontent.com/98148778/172661753-9c9e3b8e-f3b2-453b-940a-91eac14e8cf6.jpg",
    firstTrait: "Lead from Gold",
    secondTrait: "Killing Tally"
  }];

  fetchWeapons() {
    return of(this.weapons)
  }

}

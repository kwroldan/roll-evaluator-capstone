import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Weapon } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";

type WeaponsResponse = {
  weapons: Weapon[]
}

const weaponsEndpoint = `${environment.baseApiUrl}/api/weapons`;

@Injectable({
  providedIn: 'root'
})
export class FeaturedWeaponService {
  weapons: Weapon[] = [{
    name: "Calus Mini-Tool",
    imageUrl: "https://ik.imagekit.io/kwroldan/Capstone/Calus_Mini_Tool_ceB-gCdmI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654720693242",
    firstTrait: "Grave Robber",
    secondTrait: "Incadescent"
  },{
    name: "Austringer",
    imageUrl: "https://ik.imagekit.io/kwroldan/Capstone/Austringer_W66yh0aKI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654720693430",
    firstTrait: "Outlaw",
    secondTrait: "Rampage"
  },{
    name: "Lingering Dread",
    imageUrl: "https://ik.imagekit.io/kwroldan/Capstone/LingeringDread_Qs3qI5BgS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654720693202",
    firstTrait: "Autoloading Holster",
    secondTrait: "Harmony"
  },{
    name: "Hollow Denial",
    imageUrl: "https://ik.imagekit.io/kwroldan/Capstone/HollowDenial_I7J7ezhE7q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654720693686",
    firstTrait: "Lead from Gold",
    secondTrait: "Killing Tally"
  }];

  constructor(private http: HttpClient) {}

  fetchWeapons() {
    return this.http.get<WeaponsResponse>(weaponsEndpoint);
  }

}

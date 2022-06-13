import { Injectable } from '@angular/core';
import { Weapon } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable, map } from 'rxjs';

type WeaponsResponse = {
  weapons: Weapon[]
}

const weaponsEndpoint = `${environment.baseApiUrl}/api/weapons`;

@Injectable({
  providedIn: 'root'
})
export class FeaturedWeaponService {
  constructor(private http: HttpClient) {}

  fetchWeapons() {
    return this.http.get<WeaponsResponse>(weaponsEndpoint);
  }

  fetchWeaponsByName(name: string): Observable<Weapon | undefined> {
    return this.fetchWeapons().pipe(
      map((response) => response.weapons
      .find((weapon) => weapon.name === name))
    );
  }

}

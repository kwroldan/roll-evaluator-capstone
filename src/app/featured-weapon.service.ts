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
  constructor(private http: HttpClient) {}

  fetchWeapons() {
    return this.http.get<WeaponsResponse>(weaponsEndpoint);
  }
}

import { Injectable } from '@angular/core';
import { Weapon, StatsResponse, WeaponsResponse } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable, map } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


const weaponsEndpoint = `${environment.baseApiUrl}/api/weapons`;
const statsEndpoint = `${environment.thirdPartyApiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class FeaturedWeaponService {
  private apiKey = '591cec31aee5404b9fb4621e9b534642';

  constructor(private http: HttpClient) {}

  fetchWeapons() {
    return this.http.get<WeaponsResponse>(weaponsEndpoint);
  }

  fetchStats(bungieHash: number) {
    let headers = new HttpHeaders()
    headers = headers.set('X-API-Key', this.apiKey)
    return this.http.get<StatsResponse>(`${statsEndpoint}/${bungieHash}`, {headers: headers});
  }

  fetchStatsByWeaponName(name:string) {
    let headers = new HttpHeaders()
    headers = headers.set('X-API-Key', this.apiKey)
    return this.fetchWeapons().pipe(
      map((response) =>
        response.weapons.find((weapon) => weapon.name === name)
      ),
      mergeMap((weapon) =>
        this.fetchStats(weapon!.bungieHash)
      )
    )
  }

  fetchWeaponsByName(name: string): Observable<Weapon | undefined> {
    return this.fetchWeapons().pipe(
      map((response) => response.weapons
      .find((weapon) => weapon.name === name))
    );
  }

}

import { Injectable } from '@angular/core';
import { Weapon, ApiResponse, WeaponsResponse, TraitsResponse, Trait, PicksResponse, PickResponse, Pick } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable, map } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


const weaponsEndpoint = `${environment.baseApiUrl}weapons`;
const traitsEndpoint = `${environment.baseApiUrl}traits`;
const statsEndpoint = `${environment.thirdPartyApiUrl}`;
const picksEndpoint = `${environment.baseApiUrl}community-picks`;

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FeaturedWeaponService {
  private apiKey = '591cec31aee5404b9fb4621e9b534642';

  constructor(private http: HttpClient) {}

  fetchTraits() {
    return this.http.get<TraitsResponse>(traitsEndpoint);
  }

  fetchTraitByName(name: string):Observable<Trait | undefined> {
    return this.fetchTraits().pipe(
      map((response) => response.traits
        .find((trait) => trait.name === name))
    );
  }

  fetchWeapons() {
    return this.http.get<WeaponsResponse>(weaponsEndpoint);
  }

  fetchWeaponsByName(name: string): Observable<Weapon | undefined> {
    return this.fetchWeapons().pipe(
      map((response) => response.weapons
      .find((weapon) => weapon.name === name))
    );
  }

  fetchStats(bungieHash: number) {
    let headers = new HttpHeaders()
    headers = headers.set('X-API-Key', this.apiKey)
    return this.http.get<ApiResponse>(`${statsEndpoint}/${bungieHash}`, {headers: headers});
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

  fetchCommunityPicks(){
    return this.http.get<PicksResponse>(picksEndpoint);
  }

  addCommunityPick(newPick: Pick){
    return this.http.post<PickResponse>(picksEndpoint, newPick, httpOptions)
  }

}

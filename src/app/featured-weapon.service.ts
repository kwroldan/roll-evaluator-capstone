import { Injectable } from '@angular/core';
import { Weapon, ApiResponse, WeaponsResponse, TraitsResponse, Trait, PicksResponse, PickResponse, Pick, Key, KeyResponse } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable, map } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


const weaponsEndpoint = `${environment.baseApiUrl}weapons`;
const traitsEndpoint = `${environment.baseApiUrl}traits`;
const statsEndpoint = `${environment.thirdPartyApiUrl}`;
const picksEndpoint = `${environment.baseApiUrl}community-picks`;
const keyEndpoint = `${environment.baseApiUrl}abrakadabra/key`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class FeaturedWeaponService {
  private apiResponse: Key[] = [];
  private apiKey = '';

  constructor(private http: HttpClient) {}

  fetchKeys() {
    return this.http.get<KeyResponse>(keyEndpoint);
  }

  fetchApiKey() {
    this.fetchKeys().subscribe(response =>
      this.apiResponse = response.keys
    )
    this.apiKey = this.apiResponse[0].key
    return this.apiKey
  }

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
    const bungieApiKey = this.fetchApiKey()
    headers = headers.set('X-API-Key', bungieApiKey)
    return this.http.get<ApiResponse>(`${statsEndpoint}/${bungieHash}`, {headers: headers});
  }

  fetchStatsByWeaponName(name:string) {
    let headers = new HttpHeaders()
    const bungieApiKey = this.fetchApiKey()
    headers = headers.set('X-API-Key', bungieApiKey)
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

  editCommunityPick(selectedPick: Pick){
    console.log(selectedPick.id)
    return this.http.put(`${picksEndpoint}/${selectedPick.id}`, selectedPick, httpOptions).subscribe()
  }

  deleteCommunityPick(id: number) {
    return this.http.delete<Pick>(`${picksEndpoint}/${id}`).subscribe()
  }

}

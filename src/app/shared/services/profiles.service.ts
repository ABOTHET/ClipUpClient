import { Injectable } from '@angular/core';
import {CreateProfile} from "./interfaces/createProfile";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Profile} from "./interfaces/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  public api: string = `${environment}/api/Profiles`

  constructor(private http: HttpClient) { }

  public createProfile(data: CreateProfile): Observable<unknown> {
    let result: Observable<unknown> = this.http.post<unknown>(this.api, data, {})
    return result
  }

  public getProfile(profileId: string): Observable<Profile> {
    let api: string = `${this.api}/${profileId}`
    let result: Observable<Profile> = this.http.get<Profile>(api, {})
    return result
  }

}

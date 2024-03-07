import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public accessTokenName: string = "AccessToken"
  constructor() { }

  public getAccessToken(): string {
    let accessToken: string | null = localStorage.getItem(this.accessTokenName)
    return accessToken == null ? "" : accessToken
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem(this.accessTokenName, accessToken)
  }
}

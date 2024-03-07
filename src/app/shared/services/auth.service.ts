import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "./interfaces/login";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {IdAccessToken} from "./interfaces/idAccessToken";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public api: string = `${environment.url}/api/Authentication`
  constructor(private http: HttpClient) { }

  public login(data: Login): Observable<IdAccessToken> {
    let api: string = `${this.api}/Login`
    let result: Observable<IdAccessToken> = this.http.post<IdAccessToken>(api, data, { withCredentials: true })
    return result
  }

  public logout(): Observable<unknown> {
    let api: string = `${this.api}/Logout`
    let result: Observable<unknown> = this.http.post<unknown>(api, {}, { withCredentials: true })
    return result
  }

  public update(): string {
    let api: string = `${this.api}/Update`
    return api
  }

}

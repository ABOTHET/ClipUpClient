import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  public api: string = `${environment}/api/Pictures`
  constructor(private http: HttpClient) { }

  public getPicture(pictureId: string): string {
    let result: string = `${this.api}/${pictureId}`
    return result;
  }

  public uploadPicture(): string {
    return this.api
  }

  public setAvatar(pictureId: string): Observable<unknown> {
    let api: string = `${this.api}/Profile/${pictureId}`
    let result: Observable<unknown> = this.http.post<unknown>(api, {})
    return result
  }

}

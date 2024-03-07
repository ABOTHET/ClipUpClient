import {HttpClient, HttpErrorResponse, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from "@angular/core";
import {StorageService} from "../services/storage.service";
import {catchError, switchMap, throwError} from "rxjs";
import {AuthService} from "../services/auth.service";
import {IdAccessToken} from "../services/interfaces/idAccessToken";
import {Router} from "@angular/router";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let storageService: StorageService = inject(StorageService);
  let authService: AuthService = inject(AuthService)
  let http: HttpClient = inject(HttpClient)
  let router: Router = inject(Router)

  let request = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${storageService.getAccessToken()}`),
  })

  return next(request).pipe(catchError((err: HttpErrorResponse) => {
    if (err.status == 401) {
      return http.post(authService.update(), {}, { withCredentials: true }).pipe(
        switchMap((res: any) => {
          storageService.setAccessToken(res.accessToken)
          let newRequest = request.clone({
            headers: req.headers.set('Authorization', `Bearer ${storageService.getAccessToken()}`),
          })
          return next(newRequest).pipe(
            switchMap((res: any) => {
              router.navigate(['login']).then(r => {})
              return next(newRequest)
            })
          )
        })
      )
    }
    return throwError(() => err);
  }));
};

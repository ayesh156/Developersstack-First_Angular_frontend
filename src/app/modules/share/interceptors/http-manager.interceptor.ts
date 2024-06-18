import {Injectable} from '@angular/core'
import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from "rxjs";
import {CookieManagerService} from "../services/cookie-manager.service";

@Injectable()
export class httpManagerInterceptor implements HttpInterceptor {
    constructor(private cookieService:CookieManagerService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      //loading -> enable
      request=request.clone({
        setHeaders:{Authorization:this.cookieService.getToken()}
      });

      return next.handle(request).pipe(
        catchError(error=>{
          if(error.status == 403){
            //===>
          }
          return throwError(error);
        }),
        finalize(()=>{
          //loading -> disable
        })
      )

    }
}



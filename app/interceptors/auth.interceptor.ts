import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // We inject a LoginService
    constructor(private loginService: UserService, private router:Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('INTERCEPTOR',req.url);
       if (req.url.search("/login") === -1 ) {
        // We retrieve the token, if any
        const token =localStorage.getItem('token');
        let newHeaders = req.headers;
        if (token) {
           //If we have a token, we append it to our new headers
           console.log("token",token)
           newHeaders = newHeaders.append('x-access-token',
           localStorage.getItem("token"));
        }
        else
        {
         console.log('access denied') 
        }
        req= req.clone({headers: newHeaders});
       } 
       // Finally we have to clone our request with our new headers
       // This is required because HttpRequests are immutable
       // Then we return an Observable that will run the request
       // or pass it to the next interceptor if any
       return next.handle(req).pipe( tap(() => {},
       (err: any) => {
       if (err instanceof HttpErrorResponse) {
         if (err.status !== 401) {
          return;
         }
         this.router.navigate(['']);
       }
     }));
      


    }
}

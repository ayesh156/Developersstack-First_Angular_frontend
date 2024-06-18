import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public createUser(fullName:any,email:any,password:any):Observable<any>{

    let id=1;
    if(email=='doc@gmail.com'){
      id=2;
    }

    return this.http.post('http://localhost:8000/api/v1/users/visitor/signup',{
      id:id,
      fullName:fullName,
      username: email,
      password:password
    });
  }

  public login(email:any,password:any):Observable<any>{

    return this.http.post('http://localhost:8000/login',{
      username: email,
      password:password
    },{observe:'response' as 'body'}).pipe(map(data=>{
      return data;
    }));
  }
}

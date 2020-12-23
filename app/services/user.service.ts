import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginInStatus:boolean=localStorage.getItem('logIn')?true:false;
  data;


  private api = "http://localhost:3000/api/";
  
  constructor(private _http: HttpClient) { }
    
  authentificate(user){
    return this._http.post(this.api + "auth/login",user)

  }

  register(user) {
    return this._http.post(this.api + "auth/register",user)
  }
 
  logout(user) {
    return this._http.post(this.api + "auth/logout",user)
  } 

  refreshtoken(user) {
    return this._http.post(this.api + "auth/refresh",user)
  }

  getUsers() {
    return this._http.get(this.api + "users")
  }

  getUserById(id) {
    return this._http.get(this.api + "users/"+id)
  }


  /********** Guard  **************************************/ 
  getloginstatus(){
    return localStorage.getItem('logIn')?true:false
  }
  
  setloginstatus(x){
    this.loginInStatus=x
  } 

  getAuthToken(){
    return localStorage.getItem('token')
  } 
  
 





}

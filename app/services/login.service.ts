import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginInStatus=false;
  data;
  private api = "http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getloginstatus(){
    return this.loginInStatus
  }
  
  setloginstatus(x){
    this.loginInStatus=x
  }
  
  getUsers() {
    return this._http.get(this.api + "admins")
  }
  addUser(user) {
    return this._http.post(this.api + "admins",user)
  }
  deleteUser(id){
    return this._http.delete(this.api + "admins/"+id);
  }
  updateUser(id,data){
    return this._http.put(this.api + "admins/"+id,data);
  } 

  logIn(loginobj):boolean {
    let loginOk=false;
    for(let item in this.data)
    {
    if((this.data[item].email == loginobj.email)&&(this.data[item].psw=loginobj.psw))
     {
      loginOk=true; 
      this.loginInStatus=true;  
      break; 
     }
   
  }
  return loginOk; 
  } 

}

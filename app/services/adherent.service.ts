import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  
  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/adherents";


addAdherent(newAdherent){
 return this.http.post(this.apiurl,newAdherent)
}

getAdherent(){
  return this.http.get(this.apiurl)
}

getAdherentById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryAdherent(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateAdherent(id,updateAdherent){
  return this.http.put("http://localhost:3000/api/adherents/"+id,updateAdherent)
}





}
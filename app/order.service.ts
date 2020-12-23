import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/orders";


addorder(neworder){
 return this.http.post(this.apiurl,neworder)
}

getorders(){
  return this.http.get(this.apiurl)
}

getorderById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryorder(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateorder(id,updateorder){
  return this.http.put("http://localhost:3000/api/orders/"+id,updateorder)
}
}

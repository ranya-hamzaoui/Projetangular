import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/contacts";


addContact(newContact){
 return this.http.post(this.apiurl,newContact)
}

getContacts(page){
  return this.http.get(this.apiurl+"?page="+page)
}

getContactById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryContact(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateContact(id,updateContact){
  return this.http.put("http://localhost:3000/api/contacts/"+id,updateContact)
}





}

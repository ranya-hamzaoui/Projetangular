import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/commandes";


addCommande(newCommande){
 return this.http.post(this.apiurl,newCommande)
}

getCommandes(){
  return this.http.get(this.apiurl)
}

getCommandeById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryCommande(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateCommande(id,updateCommande){
  return this.http.put("http://localhost:3000/api/commandes/"+id,updateCommande)
}

}

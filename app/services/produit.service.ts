import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/products";


addProduit(newproduit,file){
  const formdata=new FormData();
  formdata.append("name",newproduit.name)
  formdata.append("price",newproduit.price)
  formdata.append("categorie",newproduit.categorie)
  formdata.append("myFile",file)
  return this.http.post(this.apiurl,formdata)
 } 

getProduits(){
  return this.http.get(this.apiurl)
}

getProduitById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryProduit(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateProduit(id,updateProduit){
  return this.http.put("http://localhost:3000/api/produits/"+id,updateProduit)
}


}

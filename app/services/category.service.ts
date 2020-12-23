import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/categories";


addCategory(newCategory){
 return this.http.post(this.apiurl,newCategory)
}

getCategories(){
  return this.http.get(this.apiurl)
}

getCategoryById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryCategory(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateCategory(id,updateCategory){
  return this.http.put("http://localhost:3000/api/Categories/"+id,updateCategory)
}




}

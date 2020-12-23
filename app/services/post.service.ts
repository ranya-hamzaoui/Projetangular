import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { } 

  private apiurl="http://localhost:3000/api/posts";
 

  addpost(newpost,file){

    console.log("newpost",newpost)
     console.log("file",file)
    const formdata=new FormData();
    formdata.append("title",newpost.title)
    formdata.append("contenu",newpost.contenu)
    formdata.append("date",newpost.date)
    formdata.append("myFile",file)
  
    
    return this.http.post(this.apiurl,formdata)
   } 
 
 getposts(){
   return this.http.get(this.apiurl)
 }
 
 getpostById(id){
   return this.http.get(this.apiurl+"/"+id)
 } 
 
 
 destorypost(id){
   return this.http.delete(this.apiurl+"/"+id)
 } 
 
 updatepost(id,updatepost){
   return this.http.put(this.apiurl+"/"+id,updatepost)
 }
 
 getcomments(id){
   return this.http.get(this.apiurl+"/"+id+"/comments")
 }

 addcomment(id,newcomment ){
   return this.http.post(this.apiurl+"/"+id,newcomment)
 }




 
 }
 

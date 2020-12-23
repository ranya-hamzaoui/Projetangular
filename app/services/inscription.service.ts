import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/internautes";


addInternaute(newInternaute,file){
  const formdata=new FormData();
    formdata.append("nom",newInternaute.nom)
    formdata.append("prenom",newInternaute.prenom)
    formdata.append("email",newInternaute.email)
    formdata.append("password",newInternaute.password)
    var details = JSON.stringify(newInternaute.address);
    console.log("hhhhhhh",details)
    formdata.append("address",details) 
    
    for (var i = 0; i < newInternaute.hobbies.length; i++) {
      formdata.append('hobbies[]', newInternaute.hobbies[i]);
  }

  for (var i = 0; i < newInternaute.skills.length; i++) {
    formdata.append('skills[]', JSON.stringify(newInternaute.skills[i]));
}

    formdata.append("myFile",file)
 return this.http.post(this.apiurl,formdata)
}

getInternautes(){
  return this.http.get(this.apiurl)
}

getInternauteById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryInternaute(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateInternaute(id,updateInternaute){
  return this.http.put("http://localhost:3000/api/internautes/"+id,updateInternaute)
}


}

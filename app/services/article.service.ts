import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  produits=[
    {id:'1',nom:'produit1',qte:2,unite:"KG"},
    {id:'2',nom:'produit2',qte:4,unite:"L"},
    {id:'3',nom:'produit3',qte:5,unite:"G"},
    {id:'4',nom:'produit4',qte:8,unite:"xx"}

] 
  
  constructor() { } 

  getdata(){
    return this.produits
  } 

  delete(id){ 

    for (let item in this.produits)
    {   if (this.produits[item].id==id)
    { 
        this.produits.splice(Number(item),1);  
        break; 
    } }  }

  getDataByID(id){
    for(let item of this.produits)
    {
      if(item.id==id)
      {
       return item;
    }
  }
  
  }

  add(id,qte){
    this.produits.map(el=>  el.id===id ? el.qte= el.qte + parseInt(qte) :el.qte)   
   }
 
   minus(id,qte){
    this.produits.map(el=>  el.id===id ? el.qte= el.qte - parseInt(qte) :el.qte) 
   }
 






} 


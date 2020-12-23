import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyproduitService {
   
  myproduits=[] 

  constructor() { }

  getproduits(){ return this.myproduits }

  addQuantite(qte,_idProduit) {
    for(let item of this.myproduits){
      if (item._id ==_idProduit ){
         item.qte=String(Number(item.qte)+Number(qte));
         break;
      }
    }
 }

 removeQuantite(qte,_idProduit) {
   for(let item of this.myproduits){
     if (item._id ==_idProduit ){
       item.qte=String(Number(item.qte)-Number(qte));
        break;
     }
   }
 }



 plusQte(_idProduit) {
  for(let item of this.myproduits){
    if (item._id ==_idProduit ){
       item.qte=String(Number(item.qte)+1);
       break;
    }
  }
}


MinusQte(_idProduit) {
  for(let item of this.myproduits){
    if (item._id ==_idProduit ){
       item.qte=String(Number(item.qte)-1);
       break;
    }
  }
} 

 romove(_idProduct) {
  for (let item in this.myproduits) {
    if(_idProduct == this.myproduits[item]._id){
         this.myproduits.splice(Number(item),1);
         break;
    }
  }
 }


addmyproduit(x){
  this.myproduits.push(x)
}


}

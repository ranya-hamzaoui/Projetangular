import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  buttonactivated=false;
  plus="";
  minus="";
  produits=[];
  produitactuel;
 
  constructor(private produitservice:ArticleService
    ,private modalService: NgbModal) { }



  /***********/  
  
  ngOnInit(): void {
    this.produits=this.produitservice.getdata()
  }

  messageAlert(event){
    console.log('message',event)
    window.alert(event)
  } 
  
  keyup(qte,qtr){
    if(qte<Number(qtr))
   {this.buttonactivated=true; }    
   else
{    this.buttonactivated=false;
}
    
  }
  remove(){ 
    console.log(this.produitactuel.id)
    this.produitservice.delete(this.produitactuel.id) 
  } 

  add(id,qte){
   this.produitservice.add(id,qte)
   
  }

  moins(id,qte){
    this.produitservice.minus(id,qte)
    

  } 

  open(content,produit) {
    this.produitactuel=produit
    this.modalService.open(content);
  }


}


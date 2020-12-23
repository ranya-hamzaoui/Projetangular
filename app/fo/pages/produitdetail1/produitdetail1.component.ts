import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/Produit.service';
import { ActivatedRoute } from '@angular/router';
import { MyproduitService } from 'src/app/services/myproduit.service';

@Component({
  selector: 'app-produitdetail1',
  templateUrl: './produitdetail1.component.html',
  styleUrls: ['./produitdetail1.component.css']
})
export class Produitdetail1Component implements OnInit {
  produit;
  produit1={_id:"",nom:"",price:"",image:"",categorie:"",qte:""};
  qte=1;
  id=this.activatedroute.snapshot.params['id']
  constructor(private produitservice:ProduitService,
              private activatedroute:ActivatedRoute,
              private myproduitservice :MyproduitService
    ) { }

  ngOnInit(): void {
    this.getproduitbyID()
  }
  
  getproduitbyID(){
  this.produitservice.getProduitById(this.id).subscribe(data=>{
    this.produit=data
    this.produit1._id=this.produit._id
    this.produit1.nom=this.produit.name
    this.produit1.price=this.produit.price
    this.produit1.image=this.produit.image
    this.produit1.categorie=this.produit.categorie
    this.produit1.qte=String(this.qte)

 
  })
  }

  addqte(){
    this.qte=Number(this.qte)+Number(1)
    this.produit1.qte=String(this.qte)

  }
  minusqte(){
    this.qte=Number(this.qte)-Number(1)
    this.produit1.qte=String(this.qte)

  }

   
  add(){
    this.myproduitservice.addmyproduit(this.produit1) 
    console.log(this.produit1)
  }


}

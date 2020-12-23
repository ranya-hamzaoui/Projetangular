import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/Produit.service';

@Component({
  selector: 'app-produitdispo',
  templateUrl: './produitdispo.component.html',
  styleUrls: ['./produitdispo.component.css']
})
export class ProduitdispoComponent implements OnInit {
  produits:any;
  search;
  constructor(private produitservice:ProduitService) { }
  ngOnInit(): void {
    this.getproduits()
  }
  
  getproduits(){
    this.produitservice.getProduits().subscribe(data=>{
      this.produits=data
    })
  }
  
  searchProduit(x){
    this.produits=this.produits.filter(el=>el.nom.toUpperCase()===x.toUpperCase())
  }

}

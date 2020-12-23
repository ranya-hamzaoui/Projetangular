import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/Produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.component.html',
  styleUrls: ['./editproduit.component.css']
})
export class EditproduitComponent implements OnInit {
  
  editproduit;
  id=this.route.snapshot.params['id'];

  constructor(private produitservice:ProduitService,
              private route:ActivatedRoute,
              private router:Router
    
    ) { }

  ngOnInit(): void { this.getProduitById() }

getProduitById(){

  this.produitservice.getProduitById(this.id).subscribe(produit=>{
    this.editproduit=produit
  })
}

updateProduit(){
  this.produitservice.updateProduit(this.id,this.editproduit)
}

goBack(){
  this.router.navigate(['/dash/produits'])
}
}

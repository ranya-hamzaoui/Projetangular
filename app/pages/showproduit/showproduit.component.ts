import { Component, OnInit} from '@angular/core';
import { ProduitService } from 'src/app/services/Produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showproduit',
  templateUrl: './showproduit.component.html',
  styleUrls: ['./showproduit.component.css']
})
export class ShowproduitComponent implements OnInit {
  
   showproduit;
   constructor(private produitservice:ProduitService,
              private activatedrouter:ActivatedRoute ,
              private router :Router
              ) { }

  ngOnInit(): void {
    this.getProduitId()
  }

   getProduitId(){

     var id = this.activatedrouter.snapshot.params['id'];

     this.produitservice.getProduitById(id).subscribe(produit=>{
       this.showproduit=produit
     })

   } 

  goBack(){
    this.router.navigate(['/dash/produits'])
  }

}

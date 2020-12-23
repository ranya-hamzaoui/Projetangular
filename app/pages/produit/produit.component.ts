import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/Produit.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-Produit',
  templateUrl: './Produit.component.html',
  styleUrls: ['./Produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  produits:any;
  produitform={name:"",price:"",categorie:"",image:""};
  fileToUpload: File = null;
  categories;
  
  constructor(
    public Produitservice:ProduitService,
    public route:ActivatedRoute,
    private categoryservice:CategoryService,
    public router:Router
    
    ) { }

  ngOnInit() {
    this.getProduits();
    this.getcategories();
    console.log(this.categories)
  }
  
  getcategories(){
    this.categoryservice.getCategories().subscribe(data=>{
      this.categories=data;
    })
  } 

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  getProduits(){
    this.Produitservice.getProduits()
        .subscribe(produits=>{
          this.produits = produits;
        })
  }
  deleteproduit(id){
    this.Produitservice.destoryProduit(id)
      .subscribe(()=>{
        this.getProduits();
      });
  }

  addProduit(){
    this.Produitservice.addProduit(this.produitform,this.fileToUpload)
        .subscribe(()=>
          // this.goBack() 
          console.log(this.produitform)
        )
  }


   goBack(){
    this.router.navigate(['/dash/produits'])
  }

}

import { Component, OnInit } from '@angular/core';
import { MyproduitService } from 'src/app/services/myproduit.service';
import { AdherentService } from 'src/app/services/adherent.service';
import { ToastrService } from 'ngx-toastr';
import { CommandeService } from 'src/app/services/commande.service';
import { OrderService } from 'src/app/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  adherentform={nom:"",prenom:"",email:"",password:"",adresseline1:"",adresseline2:"",company:"",phone:"",country:"",city:"",note:""} 
  loginform={email:"",password:""}
  neworder={date : "",date_livraison : "",type : "",adherent_id:"",products:""} 
  myproduits;
  newuser;
  adherents;
  inscription=false;
  show=false;
  constructor(private myproduitservice:MyproduitService,
              private adherentservice:AdherentService,
              private toast:ToastrService,
              private commandeservice:CommandeService,
              private orderservice:OrderService,
              private router:Router
              
    
    ) { }

  ngOnInit(): void {
    this.myproduits=this.myproduitservice.getproduits()
  }

  go(){
    // this.router.navigate(['/index/myproduit/checkout/confirmation/',this.newuser._id]);
    // console.log(this.newuser._id)
  }
 add(x){
    this.adherentservice.addAdherent(x).subscribe(data=>{
      this.newuser=data;
      this.toast.success('Vous etes deja inscrit bienvenue') 
      this.ordersend()
      this.router.navigate(['/index/myproduit/checkout/confirmation/',this.newuser._id]);
      }) 
  }
  
ordersend(){

      this.neworder.products=this.myproduits
      this.neworder.adherent_id=this.newuser._id 
      this.neworder.date=String(new Date())
      this.neworder.date_livraison=String(new Date())
      this.neworder.type="especes" 
      this.orderservice.addorder(this.neworder).subscribe(data=>{
      this.toast.success('commande envoye') 
      })
} 
 

login(){ 

  this.adherentservice.getAdherent().subscribe(data=>{
   
   this.adherents=data

   for(let item of this.adherents)
    { 
      
    if((item.email == this.loginform.email) &&(item.password == this.loginform.password))     
     {        
        alert('Vous etes bienvenus')
        this.neworder.products=this.myproduits
        this.neworder.adherent_id=item._id 
        this.neworder.date=String(new Date())
        this.neworder.date_livraison=String(new Date())
        this.neworder.type="especes" 
        this.orderservice.addorder(this.neworder).subscribe(data=>{
        this.toast.success('commande envoye') 
        })
        this.router.navigate(['/index/myproduit/checkout/confirmation/',item._id]);
        break;
     } 
     else
      {
        alert('Verifier vos coordonnées !')
        break;
      }
   
   }
  })
 
 } 

}

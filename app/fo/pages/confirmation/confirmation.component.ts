import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyproduitService } from 'src/app/services/myproduit.service';
import { AdherentService } from 'src/app/services/adherent.service';
import { ToastrService } from 'ngx-toastr';
import { CommandeService } from 'src/app/services/commande.service';
import { OrderService } from 'src/app/order.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private activeroute:ActivatedRoute,
    private myproduitservice:MyproduitService,
    private adherentservice:AdherentService,
    private toast:ToastrService,
    private commandeservice:CommandeService,
    private orderservice:OrderService,     
    ) { }
    
  id=this.activeroute.snapshot.params['id'];

  neworder;
  myproduits;
  adherent;
  newuser;
  orders;
  order;
  o;

  ngOnInit(): void {
    this.getadderentById();
    this.myproduits=this.myproduitservice.getproduits()
    this.getorders()
  }
  


  getadderentById(){
    this.adherentservice.getAdherentById(this.id).subscribe(data=>{
     this.adherent=data;
    })
  }  

 
  getorders(){
    this.orderservice.getorders().subscribe(data=>{
     this.orders=data
     for(let item of this.orders){
     if(item.adherent_id===this.id)
     {
       this.order=item;
       console.log("les donnees ",item)
     }
      break;
     }

    })
  }



   getorderById(){
     this.orderservice.getorderById(this.id).subscribe(data=>{
       this.o=data
     })
   }
  



}

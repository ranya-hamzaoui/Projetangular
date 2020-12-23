import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { ProduitdispoComponent } from '../produitdispo/produitdispo.component';
import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';
import { LogininternauteComponent } from '../logininternaute/logininternaute.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { CategorieComponent } from '../categorie/categorie.component';
import { ContactfrontComponent } from '../contactfront/contactfront.component';
import { Produitdetail1Component } from '../produitdetail1/produitdetail1.component';
import { MyproduitComponent } from '../myproduit/myproduit.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { InscriptionComponent } from 'src/app/inscription/inscription.component';
import { PostComponent } from '../post/post.component';
import { ArticlesComponent } from '../articles/articles.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ProfileComponent } from '../adherentespace/profile/profile.component';

const routes: Routes = [

  {path:"index",component:IndexComponent,
  
  children:[
   {path:"about",component:AboutComponent},
   {path:"contact",component:ContactfrontComponent},
   {path:"about",component:AboutComponent},
   {path:"loginuser",component:LogininternauteComponent},
   {path:"produit",component:ProduitdispoComponent},
   {path:"myproduit",component:MyproduitComponent},
   {path:"article",component:ArticlesComponent},
   {path:"myproduit/checkout",component:CheckoutComponent},
   {path:"myproduit/checkout/confirmation/:id",component:ConfirmationComponent},
   {path:"accueil",component:AccueilComponent},
   {path:"produit/:id",component:Produitdetail1Component},
   {path:"inscription",component:InscriptionComponent},
   {path:"categorie",component:CategorieComponent},
   {path:"post",component:PostComponent},
   {path:"profile/:id",component:ProfileComponent}    






  
  ]
  }
 ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class IndexRoutingModule { }

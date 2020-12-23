import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/pages/user/user.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { ProduitComponent } from 'src/app/pages/produit/produit.component';
import { ShowproduitComponent } from 'src/app/pages/showproduit/showproduit.component';
import { EditproduitComponent } from 'src/app/pages/editproduit/editproduit.component';
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { AuthGuard } from 'src/app/auth.guard';
import { AddpostComponent } from 'src/app/pages/addpost/addpost.component';

const routes: Routes = [

  {path:"dash",component:DashComponent,
  canActivate:[AuthGuard],
  children:[
   {path:"user",component:UserComponent},
   {path:"",component:AdminComponent},
   {path:"contacts",component:ContactComponent},
   {path:"posts",component:AddpostComponent},
   {path:"produits",component:ProduitComponent},
   {path:"show/:id",component:ShowproduitComponent},
   {path:"edit/:id",component:EditproduitComponent} 
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
export class DashRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { DashComponent } from './layout/dash/dash.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavSideComponent } from './layout/nav-side/nav-side.component';
import { SettingComponent } from './layout/setting/setting.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashRoutingModule } from './layout/dash/dash-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component'; 
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './pages/contact/contact.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditproduitComponent } from './pages/editproduit/editproduit.component';
import { ShowproduitComponent } from './pages/showproduit/showproduit.component';
import { AccueilComponent } from './fo/pages/accueil/accueil.component';
import { CategorieComponent } from './fo/pages/categorie/categorie.component';
import { AboutComponent } from './fo/pages/about/about.component';
import { IndexComponent } from './fo/pages/index/index.component';
import { LogininternauteComponent } from './fo/pages/logininternaute/logininternaute.component';
import { ProduitdispoComponent } from './fo/pages/produitdispo/produitdispo.component';
import { FooterfrontComponent } from './fo/snippets/footerfront/footerfront.component';
import { HeaderfrontComponent } from './fo/snippets/headerfront/headerfront.component';
import { IndexRoutingModule } from './fo/pages/index/index-routing.module';
import { ContactfrontComponent } from './fo/pages/contactfront/contactfront.component';
import { Produitdetail1Component } from './fo/pages/produitdetail1/produitdetail1.component';
import { MyproduitComponent } from './fo/pages/myproduit/myproduit.component';
import { CheckoutComponent } from './fo/pages/checkout/checkout.component';
import { ConfirmationComponent } from './fo/pages/confirmation/confirmation.component';
import { ProfileComponent } from './fo/pages/adherentespace/profile/profile.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TesterComponent } from './fo/pages/tester/tester.component';
import { PostComponent } from './fo/pages/post/post.component';
import { QteDirective } from './directives/qte.directive';
import { ArticlesComponent } from './fo/pages/articles/articles.component';
import { UnitePipe } from './pipes/unite.pipe';
import { ArticlechilddComponent } from './fo/pages/articlechildd/articlechildd.component';
import { AddpostComponent } from './pages/addpost/addpost.component';
/****************/
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HeaderComponent,
    NavSideComponent,
    SettingComponent,
    SideBarComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    ContactComponent,
    ProduitComponent,
    AdminComponent,
    EditproduitComponent,
    ShowproduitComponent,
    AccueilComponent,
    CategorieComponent,
    AboutComponent,
    IndexComponent,
    LogininternauteComponent,
    ProduitdispoComponent,
    FooterfrontComponent,
    HeaderfrontComponent,
    ContactfrontComponent,
    Produitdetail1Component,
    MyproduitComponent,
    CheckoutComponent,
    ConfirmationComponent,
    ProfileComponent,
    InscriptionComponent,
    TesterComponent,
    PostComponent,
    QteDirective,
    ArticlesComponent,
    UnitePipe,
    ArticlechilddComponent,
    AddpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(
      
      {
        timeOut: 10000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    )   
  ],

  // providers: [],

  providers: [ {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

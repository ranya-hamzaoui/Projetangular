import { Component, OnInit } from '@angular/core';
import { AdherentService } from 'src/app/services/adherent.service';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-logininternaute',
  templateUrl: './logininternaute.component.html',
  styleUrls: ['./logininternaute.component.css']
})
export class LogininternauteComponent implements OnInit {
  adherents;
  adherent={email:"",password:""}
  constructor(private adherentservice:InscriptionService,
              private router:Router) { }

  ngOnInit(): void {
    this.adherentservice.getInternautes().subscribe(data=>{
      this.adherents=data
    })
    console.log(this.adherents)
  }

  login(){ 

    this.adherentservice.getInternautes().subscribe(data=>{    
     this.adherents=data
     for(let item of this.adherents) {
      if((item.email == this.adherent.email)  &&(item.password == this.adherent.password))       
       {  
          alert('Vous etes bienvenus')
          this.router.navigate(['/index/profile/',item._id]);
          console.log(item._id)
          break;
       } 

       else 
       {
        alert('Verifier vos informations')
        break;
       }
     
     }
    })
   
   } 

  convert(x){
    return JSON.parse(x)
  }

}

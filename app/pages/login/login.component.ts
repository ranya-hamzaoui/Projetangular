import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 

export class LoginComponent implements OnInit {   

   logindata={email:"",password:""}
   info;
   constructor(private router:Router , private userservice:UserService) { }
  
   ngOnInit(): void { console.log("les donnees du login ")} 
   
   authentificate(){
     this.userservice.authentificate(this.logindata).subscribe(data=>{

      console.log("les donnees du login ",data)
      if(data!==null)      
      {  this.info=data;
         localStorage.setItem("logIn",'true'); 
         localStorage.setItem("currentuser",JSON.stringify(this.info.data.user)); 
         localStorage.setItem("token",this.info.data.token); 
        this.router.navigate(['dash']);     
      } 
      
       
   },errr=>{

    console.log(errr)
   })
   }

}

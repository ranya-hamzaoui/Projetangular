import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userform={id:"",email:"",password:"",role:""} 
  users;

  constructor(private userservice:UserService,
              private toast:ToastrService,
              private modalService: NgbModal
    ) { }

  ngOnInit(): void {
     this.loadusers()
    }

loadusers(){
    this.userservice.getUsers().subscribe(data=>{
      this.users=data      
      console.log('les donnees',this.users) 
    })
   } 

register(newuser){
  this.userservice.register(newuser).subscribe(data=>{
    this.loadusers() 
    this.toast.success("utilisateur a été ajouter avec succée")
  })
}


getUsers(){
  this.userservice.getUsers().subscribe(data=>{
    this.users=data    
  })
}











}
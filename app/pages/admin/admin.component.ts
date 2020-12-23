import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userservice:UserService,private route :Router) { }
  data;
  user;
  ngOnInit(): void {
    this.user=localStorage.getItem('currentuser')
  } 
  
  deconnexion(){
    this.userservice.logout(this.data).subscribe()
    localStorage.clear() 
    this.route.navigate(['/']);     


  }

}

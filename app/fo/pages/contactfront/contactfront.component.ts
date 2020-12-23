import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactfront',
  templateUrl: './contactfront.component.html',
  styleUrls: ['./contactfront.component.css']
})
export class ContactfrontComponent implements OnInit {
  contactform={subject:"",email:"",message:"",nom:""} 
  constructor(private contactservice:ContactService,private toast:ToastrService) { }

  ngOnInit(): void {
  }

  add(x){
    this.contactservice.addContact(x).subscribe(data=>{
      this.toast.success('contact envoyé aux administrateur avec success')
    })
  }

}

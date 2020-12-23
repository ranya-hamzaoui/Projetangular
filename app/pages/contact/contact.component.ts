import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  Contactform={id:"",nom:"",email:"",subject:"",message:""} 
  contacts:any;
  private ContactDelete;
  ContactData: any;
  ContactDataEdit = { id: "",nom:"", email: "", subject: "", message: "" }
  Contactview:any;
  page=1;
  p;
  constructor(private contactservice:ContactService,
              private toast:ToastrService,
              private modalService: NgbModal
    ) { }


  ngOnInit(): void { this.loadContact() }

  getEvent(event){
      console.log(event) }

  loadContact(){
    this.contactservice.getContacts(this.page).subscribe(data=>{
      console.log(data)  
      this.contacts=data     
    })
   } 

add(newContact){
  this.contactservice.addContact(newContact).subscribe(data=>{
    console.log('element ajouter avec success')
    console.log(this.Contactform) 
    this.loadContact() 
    this.toast.success("utilisateur a été ajouter avec succée")
  })
}


getContact(){
  this.contactservice.getContacts(this.page).subscribe(data=>{
    console.log(data) 
    this.contacts=data      
  })
}



delete(content,Contact)
{
this.ContactDelete = Contact;  
this.modalService.open(content) 
}

deleteContact() {
  console.log("+++ ContactDelete +++", this.ContactDelete);
  this.contactservice.destoryContact(this.ContactDelete._id).subscribe(data => {
    this.getContact();
    console.log("remove Contact")
  })
}


view(content,Contact)

{
this.Contactview = Contact;  
this.modalService.open(content) 
this.ContactDataEdit.nom = Contact.nom;
this.ContactDataEdit.email = Contact.email;
this.ContactDataEdit.subject = Contact.subject;
this.ContactDataEdit.message = Contact.message;
} 


edit(content,Contact){
this.modalService.open(content)
this.ContactDataEdit.id = Contact._id;
this.ContactDataEdit.nom = Contact.nom;
this.ContactDataEdit.email = Contact.email;
this.ContactDataEdit.subject = Contact.subject;
this.ContactDataEdit.message = Contact.message;

}


update(){
  this.contactservice.updateContact(this.ContactDataEdit.id,this.ContactDataEdit).subscribe(data=>{
    this.loadContact()
  })
}


}

import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private internauteservice:AdherentService,
              private activeroute:ActivatedRoute     
    ) { }
    
  id=this.activeroute.snapshot.params['id'];
  adherent;
  
  ngOnInit(): void {
    this.getadherent()
  }

  getadherent(){
    this.internauteservice.getAdherentById(this.id).subscribe(data=>{
      this.adherent=data;
     
    })
  }

}

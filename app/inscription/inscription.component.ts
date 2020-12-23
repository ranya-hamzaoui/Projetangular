import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private fb:FormBuilder,
              private internauteservice:InscriptionService,
              private toast :ToastrService
    
    ) { }

  inscriptionuser = this.fb.group({
    nom: ['',[Validators.required,
              Validators.maxLength(6)
             ]],
    prenom: [''],
    email: [''],
    password: [''],
    image:[''],
    address: this.fb.group({
      city: [''],
      adresse: [''],
      poste: ['']
    }),

    skills: this.fb.array([]),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  }); 

  
  get skills() : FormArray {
    return this.inscriptionuser.get("skills") as FormArray
  }
 
  newSkill(): FormGroup{
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
  
  get hobbies() {
    return this.inscriptionuser.get('hobbies') as FormArray;
  } 

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }  


  addHobbies() {
    this.hobbies.push(this.fb.control(''));
  }
  
  RemoveHobbies(i) {
    this.hobbies.removeAt(i);
  }


  ngOnInit(): void {}


  onsubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.inscriptionuser.value); 
    this.internauteservice.addInternaute(this.inscriptionuser.value,this.fileToUpload).subscribe(data=>{
      this.toast.success('vous etes inscrit avec success')
    })
  } 
  
   onReset(){
     this.inscriptionuser.reset();
   }
}
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
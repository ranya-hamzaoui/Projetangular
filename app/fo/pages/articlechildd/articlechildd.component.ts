import { Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'app-articlechildd',
  templateUrl: './articlechildd.component.html',
  styleUrls: ['./articlechildd.component.css']
})
export class ArticlechilddComponent implements OnInit {
  
  @Input('produit') produit;
  @Output('message') message =new EventEmitter;

  constructor() { }
  ngOnInit(): void {}

   /***************/
  
   affiche(){ 

   this.message.emit('ma premiere notification')
    window.alert(event)  
  }
  
  notification(){
    this.message.emit('ma premiere notification')
    window.alert(event)
  }

 @HostListener('click') onClick(event){
   
 }

}

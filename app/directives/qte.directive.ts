import { Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appQte]'
})

export class QteDirective {
  
  @Input('qte') qte; 


  constructor(private _render :Renderer2, private _el:ElementRef) { } 

   
   @HostListener("focusout")
   setFocusOut():void{
    if(this.qte==0)
    {
     this._render.setStyle(this._el.nativeElement,"background-color","gray");
    }
    else 
    {
      this._render.setStyle(this._el.nativeElement,"background-color","white");
     
    }
   }
}

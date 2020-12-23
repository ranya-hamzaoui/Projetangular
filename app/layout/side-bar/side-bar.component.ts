import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }
   user;
  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('currentuser'))

  }


}

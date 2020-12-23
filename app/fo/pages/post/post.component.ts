import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts;
  comments;
  ok=false;
  comment={name:"user",email:"user.ad@gmail.com",message:""}
  constructor(private postservice:PostService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.getpost()
  }
  getpost(){
    this.postservice.getposts().subscribe(data=>{
      this.posts=data
      console.log(this.posts)
    })
  }

  getcomments(id){
    this.postservice.getcomments(id).subscribe(data=>{
     this.comments=data
     console.log(this.comments.comments)
    })
  }

  togle(id){
    this.ok=!this.ok;
    this.getcomments(id)
  }

  addcomments(id){
    this.postservice.addcomment(id,this.comment).subscribe(data=>{
      this.toast.success('commentaire ajoutee')
      this.getcomments(id);
    })
  } 

}

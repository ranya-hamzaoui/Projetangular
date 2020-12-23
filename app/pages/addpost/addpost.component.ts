import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  postform={title:"",contenu:"",image:"",date:""}
  posts;
  fileToUpload: File = null;
  constructor(private postservice:PostService, 
              private toast:ToastrService) { }

  ngOnInit(): void {
    this.getpost();

  }
  
  addPost(){
    this.postservice.addpost(this.postform,this.fileToUpload).subscribe(data=>{

       this.getpost();
         this.toast.success('post enregiste')
    })
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  } 
  getpost(){
    this.postservice.getposts().subscribe(data=>{
      this.posts=data
    })
  }
  deletePost(id){
    this.postservice.destorypost(id).subscribe(data=>{
      this.toast.show('element supprime')
    })
  }
}

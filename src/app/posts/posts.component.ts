import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service'; 

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private service: PostsService) { }

  posts; 

  ngOnInit() {
    console.log("this was called")
    this.service.getPosts()
      .subscribe(res => {
        console.log(res)
        this.posts = res.json().reverse(); 
      }, error => {
        console.error(error); 
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = ''; 
    this.service.createPost(post)
      .subscribe(res => {
        post['id'] = res.json().id; 
        this.posts.splice(0, 0, post)
      }); 
  }

  deletePost(post) {
    console.log(post)
    this.service.deletePost(post)
      .subscribe(res => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1); 
      }); 
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(res => {
        let index = this.posts.indexOf(post)
        post['checked'] = res.json().checked; 
        console.log(res.json(), "HERE IS THE RES")
        console.log(post, "HERE IS THE POST")
        this.posts.splice(index, 1, post)
      }); 
  }
}

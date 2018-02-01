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
    this.service.createPost(post)
      .subscribe(res => {
        post['id'] = res.json().id; 
        this.posts.splice(0, 0, post)
      },
      error => {
        console.error(error)
      }); 
  }

  deletePost(post) {
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1); 
    this.service.deletePost(post)
      .subscribe(null,
      error => {
        this.posts.splice(index, 0, post)
        console.error(error)
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(res => {
        let index = this.posts.indexOf(post)
        post['checked'] = res.json().checked; 
        this.posts.splice(index, 1, post)
      },
      error => {
        console.error(error)
      });
  }
  
}

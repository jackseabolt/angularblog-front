import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  private url = 'http://localhost:8080/posts'; 

  getPosts() {
    return this.http.get(this.url); 
  }

  createPost(post) {
    return this.http.post(this.url, post)
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id )
  }

  updatePost(post) {
    console.log("HERE IS THE POST", post)
    return this.http.put(this.url + '/' + post.id, post)
  }
  
}

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { CapitalizePipe } from './capitalize.pipe';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ItemComponent, 
    CapitalizePipe
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

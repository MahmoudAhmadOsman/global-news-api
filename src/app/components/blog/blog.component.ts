import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogs = [];
  loading = true;
  public blogTitle: string = "List of blogs";
  constructor(private blogService: BlogService) {

    blogService.getAllBlogs().subscribe(data => {
      console.log("list of blogs", data);
      this.blogs = data;

      //Set loading to false after data is fetched
      this.loading = false;

    }, (error) => {
      console.log("Error", error);
})

   }

  ngOnInit(): void {
  }

}

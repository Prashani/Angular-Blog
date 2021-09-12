import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addBlog(image: HTMLInputElement, title: HTMLInputElement, content: HTMLInputElement) {
  	console.log(image.value, title.value, content.value);
  	let blogList = localStorage.getItem("blogs");
  	let blogs = []
  	if(blogList) {
  		blogs = JSON.parse(blogList)
  	}

  	let blog = {image: image.value, title: title.value, content: content.value}
  	blogs.push(blog)
  	localStorage.setItem("blogs",JSON.stringify(blogs));
  	image.value = ""
  	title.value = ""
  	content.value = ""
  	alert("Added Blog");
  }

}

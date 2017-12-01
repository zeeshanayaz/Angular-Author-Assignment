import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
    <p>
      author works!
    </p>
    <h1>
      {{ title }}
    </h1>
    <ul>
      <li *ngFor="let author of Author">
        {{ author }}
      </li>
    </ul>
  `
  // templateUrl: './author.component.html',
  // styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title = "List of Author"
  Author;

  constructor(service: AuthorService) {

    this.Author=service.getAuthor();
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../../services/data-api.service";
import { BookInterface } from "../../models/book-interface.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  books: BookInterface;

  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks() {
    this.dataApi
      .getNotOffers()
      .subscribe((books: BookInterface) => (this.books = books));
  }

}

import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book-interface.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  books: BookInterface;

  ngOnInit(): void {
    this.dataApi
      .getOffers()
      .subscribe((data: BookInterface) => (this.books = data))
  }

}

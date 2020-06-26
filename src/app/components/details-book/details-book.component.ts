import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { BookInterface } from '../../models/book-interface.model';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  book: BookInterface = {
    titulo: '',
    idioma: '',
    descripcion: '',
    portada: '',
    precio: '',
    link_amazon: '',
    autor: '',
    oferta: ''
  };

  ngOnInit(): void {
    const book_id = this.route.snapshot.params['id'];
    this.getDetails(book_id);
  }

  getDetails(id: number) {
    this.dataApi.getBookById(id).subscribe(book => (this.book = book));
  }

}

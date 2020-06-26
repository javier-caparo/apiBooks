import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book-interface.model';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dataApiService: DataApiService,private location: Location) { }

  ngOnInit(): void {
  }

  onSaveBook(bookForm: NgForm): void {
    if (bookForm.value.bookId == null) {
      // NEW
      this.dataApiService.saveBook(bookForm.value).subscribe(book => location.reload());
    } else {
      // update
      this.dataApiService.updateBook(bookForm.value).subscribe(book => location.reload());
    }
  }

}

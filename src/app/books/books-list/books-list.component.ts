import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Book } from '../../shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'uaz-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books: Book[];
  public identity: object;
  public token: string;

  constructor(private _router: Router, private _booksService: BooksService, private _authService: AuthService) {}

  ngOnInit() {
    this._booksService.list(this._authService.getToken()).subscribe(
      response => {
        this.books = response.data;
      },
      error => {
        console.log(error as any);
      }
    );
  }
}

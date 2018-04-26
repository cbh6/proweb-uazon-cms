import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { UsersService } from '../../shared/services/api/users.service';
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

  constructor(private _router: Router, private _booksService: BooksService, private _usersService: UsersService) {
    this.identity = this._usersService.getIdentity();
    this.token = this._usersService.getToken();
  }

  ngOnInit() {
    console.log(this.identity);
    if (this.identity == null) {
      this._router.navigate(['login']);
    } else {
      this._booksService.list(this.token).subscribe(
        response => {
          console.log(response.data);
          this.books = response.data;
        },
        error => {
          console.log(error as any);
        }
      );
    }
  }
}

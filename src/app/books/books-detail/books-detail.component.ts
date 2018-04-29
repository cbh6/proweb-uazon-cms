import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/mergeMap';
import { BooksService } from '../books.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'uaz-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  public book: Book;

  constructor(
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _booksService: BooksService
  ) {}

  ngOnInit() {
    this._route.params
      .flatMap((v: any, index: number) => {
        return this._booksService.detail(this._authService.getToken(), v.id);
      })
      .subscribe(response => (this.book = response.data));
  }
}

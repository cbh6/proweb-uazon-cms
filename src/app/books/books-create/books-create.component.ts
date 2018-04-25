import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../shared/services/api/users.service';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'uaz-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit {
  public identity;
  public token;
  public book: Book;

  constructor(private _route: ActivatedRoute, private _router: Router, private _usersService: UsersService) {
    this.identity = this._usersService.getIdentity();
    this.token = this._usersService.getToken();
  }

  ngOnInit() {
    if (this.identity == null || !this.identity.sub) {
      this._router.navigate(['login']);
    } else {
      this.book = new Book({});
    }
  }

  onSubmit(form) {
    console.log(this.book);
  }
}

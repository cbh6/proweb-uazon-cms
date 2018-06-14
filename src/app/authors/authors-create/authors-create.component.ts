import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorsService } from '../authors.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Author } from '../../shared/models/author.model';
@Component({
  selector: 'uaz-authors-create',
  templateUrl: './authors-create.component.html',
  styleUrls: ['./authors-create.component.css']
})
export class AuthorsCreateComponent implements OnInit {
  public author: Author;

  constructor(    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _athorsService: AuthorsService) { }

  ngOnInit() {
    this.author = new Author({});
    this.author.init();
  }

  onSubmit() {
    this._athorsService.create(this._authService.getToken(), this.author).subscribe(
      response => {
        this._toastr.success('Autor creado correctamente');
        this._router.navigate(['authors']);
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al crear el autor');
        console.log(error as any);
      }
    );
  }
}

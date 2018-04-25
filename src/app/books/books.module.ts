import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemPageComponent } from './books-item-page/books-item-page.component';

@NgModule({
  imports: [SharedModule],
  declarations: [BooksComponent, BooksListComponent, BooksItemPageComponent],
  exports: [BooksComponent]
})
export class BooksModule {}

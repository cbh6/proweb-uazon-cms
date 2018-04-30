import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksCreateComponent } from './books-create/books-create.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  imports: [SharedModule, NgxSmartModalModule.forRoot()],
  providers: [BooksService],
  declarations: [BooksComponent, BooksListComponent, BooksCreateComponent, BooksDetailComponent],
  exports: [BooksComponent, BooksCreateComponent]
})
export class BooksModule {}

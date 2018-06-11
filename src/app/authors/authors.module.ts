import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
// import { authorsCreateComponent } from './authors-create/authors-create.component';
// import { authorsDetailComponent } from './authors-detail/authors-detail.component';

@NgModule({
  imports: [SharedModule],
  providers: [AuthorsService],
  declarations: [AuthorsComponent, AuthorsListComponent],
  exports: [AuthorsComponent]
})
export class AuthorsModule {}

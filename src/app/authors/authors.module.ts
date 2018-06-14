import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsCreateComponent } from './authors-create/authors-create.component';

@NgModule({
  imports: [SharedModule],
  providers: [AuthorsService],
  declarations: [AuthorsComponent, AuthorsListComponent, AuthorsCreateComponent],
  exports: [AuthorsComponent]
})
export class AuthorsModule {}

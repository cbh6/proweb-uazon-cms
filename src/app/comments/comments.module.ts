import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommentsService } from './comments.service';
import { CommentsComponent } from './comments.component';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  imports: [SharedModule],
  providers: [CommentsService],
  declarations: [CommentsComponent, CommentsListComponent],
  exports: [CommentsComponent]
})
export class CommentsModule {}

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './users.service';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  imports: [SharedModule],
  providers: [UsersService],
  declarations: [UsersComponent, UsersListComponent, UsersDetailComponent],
  exports: [UsersComponent]
})
export class UsersModule {}

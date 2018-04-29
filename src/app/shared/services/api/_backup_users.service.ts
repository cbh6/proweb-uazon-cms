// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { ApiService } from './api.service';
// import { Observable } from 'rxjs/Observable';

// import { User } from '../../models/user.model';

// @Injectable()
// export class UsersService {
//   //   private user$: BehaviorSubject<User[]> = new BehaviorSubject([]);

//   //   public get user() {
//   //     return this.user$.asObservable();
//   //   }

//   constructor(private apiService: ApiService) {}

//   //   list() {
//   //     this.apiService.get('usuarios').map((res: any[]) => this.user$.next(res.map(item => new User(item))));
//   //   }

//   create(user: object): Observable<any> {
//     console.log('create userservice', user);
//     return this.apiService.post('usuarios', user);
//   }
// }

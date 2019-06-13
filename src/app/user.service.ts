import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  getData() {
    const data = {
      isLoggedIn: false,
      user: '',
      message: ''
    };
    setTimeout(() => {
      data.isLoggedIn = true;
      data.user = 'Alvan';
      data.message = '歡迎登入';
    }, 2000);
    return Observable.create(observer => observer.next(data));
  }
}

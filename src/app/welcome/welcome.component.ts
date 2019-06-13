import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  data = {
    isLoggedIn: false,
    user: '',
    message: ''
  };
  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  login() {
    this.userService.getData().subscribe((result) => {
      this.data = result;
    },
    (error) => {
      console.log('錯誤資訊', error);
    });
  }
}

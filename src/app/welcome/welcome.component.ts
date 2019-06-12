import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcome: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.welcome = this.userService.isLoggedIn ?
      `歡迎, ${this.userService.user.name}` : `未授權, 請登入！`;
  }

}

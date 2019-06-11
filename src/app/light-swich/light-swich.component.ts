import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-swich',
  templateUrl: './light-swich.component.html',
  styleUrls: ['./light-swich.component.scss']
})
export class LightSwichComponent implements OnInit {
  isOn = false;
  constructor() { }
  ngOnInit() {}
  clicked() {
    this.isOn = !this.isOn;
  }
  getMessage() {
    return `燈現在是 ${this.isOn ? '開' : '關'} 的！`;
  }
}

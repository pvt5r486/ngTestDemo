import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
  getArray() {
    return ['en', 'es', 'fr'];
  }
  getString(str) {
    return str;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  Messages = [];

  add(message) {
    this.Messages.push(message);
  }

  clear() {
    this.Messages = [];
  }

}

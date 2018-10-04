import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessagesService) { }

  ngOnInit() {
  }

  onClickClear() {
    this.messageService.clear();
  }

  addMessage() {
    this.messageService.add('new message added');
  }
}

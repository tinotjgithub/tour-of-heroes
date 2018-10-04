import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor(public messageServive: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageServive.add('Fetched heroes');
    return of(HEROES);
  }
}

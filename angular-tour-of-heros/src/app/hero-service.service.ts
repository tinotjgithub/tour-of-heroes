import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageServive: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageServive.add('Fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageServive.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

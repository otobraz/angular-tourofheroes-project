import { Injectable } from '@angular/core';
import { HEROES } from '../components/heroes/mock-heroes';
import { Hero } from '../components/heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
   providedIn: 'root',
})
export class HeroService {
   getHeroes(): Observable<Hero[]> {
      this.messageService.add('HerroService: fetched heroes');
      return of(HEROES);
   }

   getHero(id: number): Observable<Hero | undefined> {
      const hero = HEROES.find((hero) => hero.id === id);
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(hero);
   }

   constructor(private messageService: MessageService) {}
}

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

   constructor(private messageService: MessageService) {}
}

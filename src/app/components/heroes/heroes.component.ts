import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from './hero';
import { MessageService } from 'src/app/services/message.service';

@Component({
   selector: 'app-heroes',
   templateUrl: './heroes.component.html',
   styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
   // selectedHero?: Hero;
   heroes: Hero[] = [];

   // onSelect(hero: Hero): void {
   //    this.selectedHero = hero;
   //    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
   // }

   getHeroes(): void {
      this.heroService
         .getHeroes()
         .subscribe((heroes) => (this.heroes = heroes));
   }

   constructor(
      private heroService: HeroService,
      private messageService: MessageService
   ) {}

   ngOnInit(): void {
      this.getHeroes();
   }
}

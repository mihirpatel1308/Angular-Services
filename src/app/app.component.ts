import { Component } from '@angular/core';
import { SuperHeroService } from './super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [SuperHeroService]
})
export class AppComponent {
  title = 'Angular-Services-Demo';

   //create heroes array
   heroes: { name: string, universe: string }[] = [];

   //inject HeroesService as a constructor parameter
   constructor(private heroesService: SuperHeroService) { }
 
   ngOnInit() {
     this.getHeroes();
   }
 
   getHeroes() {
     this.heroesService.getHeroes().subscribe((response: any) => {
       this.heroes = response;
       console.log('this.heroes : ' , this.heroes);
       
     });
   }
 
   getUpdatedData(event:any){
     this.getHeroes();
   }
}

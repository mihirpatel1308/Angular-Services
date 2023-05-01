import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHeroService } from '../super-hero.service';

@Component({
  selector: 'app-super-heroes',
  templateUrl: './super-heroes.component.html',
  styleUrls: ['./super-heroes.component.scss']
})
export class SuperHeroesComponent implements OnInit {
  @Input() hero: any;

  /** This property is used for emit data data to parent component for get updated data*/
  @Output() public getUpdatedData: EventEmitter<boolean>;
  constructor(
    private heroesService: SuperHeroService
  ) {
    this.getUpdatedData = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  removeHero(heroId: number) {
    this.heroesService.removeHero(heroId).subscribe((response: any) => {
      debugger
      this.getUpdatedData.next(true);
    });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SuperHeroService } from '../super-hero.service';

@Component({
  selector: 'app-add-super-hero',
  templateUrl: './add-super-hero.component.html',
  styleUrls: ['./add-super-hero.component.scss']
})
export class AddSuperHeroComponent implements OnInit {
  /** This property is used for emit data data to parent component for get updated data*/
  @Output() public getUpdatedData: EventEmitter<boolean>;
  constructor(
    private superHeroService: SuperHeroService
  ) {
    this.getUpdatedData = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  onCreateHero(heroName: string, universe: string) {
    debugger
    this.superHeroService.addHero(heroName, universe).subscribe((response: any) => {
      console.log('response: ', response);
      this.getUpdatedData.next(true);
    });
  }
}

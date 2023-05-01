ng g c super-heroes

ng g c add-super-hero

ng g s super-hero

npm install -g json-server

--> Create db.json



{
  "heroes": [
    {
      "id": 1,
      "name": "Captain America",
      "universe": "Marvel"
    },
    {
      "id": 2,
      "name": "Iron Man",
      "universe": "Marvel"
    },
    {
      "id": 3,
      "name": "Wonder Woman",
      "universe": "DC"
    }
  ]
}

--> json-server --watch db.json

--> import { HttpClientModule } from '@angular/common/http';

--> In Hero service ts file
  private http: HttpClient

  getHero() {
    return this.http.get(this.url + '/heroes');
  }

<!-- App component html -->

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-8 col-md-offset-2">
      <app-add-super-hero (getUpdatedData)="getUpdatedData($event)"></app-add-super-hero>
      <hr>
      <app-super-heroes *ngFor="let hero of heroes; let i = index" [hero]="hero" [id]="i"
        (getUpdatedData)="getUpdatedData($event)"></app-super-heroes>
    </div>
  </div>
</div>

<!-- App component ts -->
export class AppComponent implements OnInit {

  
  //create heroes array
  heroes: { name: string, universe: string }[] = [];

  //inject HeroesService as a constructor parameter
  constructor(private heroesService: SuperHeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHero().subscribe((data: any) => {
      this.heroes = data;
    });
  }

  getUpdatedData(event:any){
    this.getHeroes();
  }
}

<!-- Super hero component ts file -->
 @Input() hero: any;
  @Input() id: any;

 /** This property is used for emit data data to parent component for get updated data*/
  @Output() public getUpdatedData: EventEmitter<boolean>;

==> In constructor
this.getUpdatedData = new EventEmitter<boolean>();

   removeHero(heroId:number) {
    this.heroesService.removeHero(heroId).subscribe((response: any) => {
      debugger
      this.getUpdatedData.next(true);
    });
  }

  <!-- Super hero component html file -->
  <div class="row">
    <div class="col-xs-12 col-md-8 col-md-offset-2">
        <h3>{{ hero.name }}</h3>

        <p>This hero belongs to {{ hero.universe }} universe.</p>
        <a (click)="removeHero()">Remove Hero</a>
        <hr>

    </div>
</div>

<!-- Add Super hero Component ts file -->

  /** This property is used for emit data data to parent component for get updated data*/
  @Output() public getUpdatedData: EventEmitter<boolean>;

<!-- In constructor -->
this.getUpdatedData = new EventEmitter<boolean>();

  onCreateHero(heroName: string, heroUniverse: string) {
    const requestBody = {
      id: Math.floor(Math.random() * 90 + 10),
      name: heroName,
      universe: heroUniverse
    }
    this.heroesService.createHero(requestBody).subscribe((response: any) => {
      console.log('response: ', response);
      this.getUpdatedData.next(true);
    });

<!-- Add super hero component html file -->
<div class="row">
    <div class="col-xs-12 col-md-8 col-md-offset-2">
        <h2>Create a Hero</h2>
        <div class="form-group">
            <label>Hero Name</label>
            <input type="text" class="form-control" #heroName>
        </div>
        <div class="form-group">
            <select class="form-control" #universe>
                <option value="Marvel">Marvel</option>
                <option value="DC">DC</option>
            </select>
        </div>
        <button class="btn btn-primary" (click)="onCreateHero(heroName.value, universe.value)">
            Create Hero
        </button>
    </div>
</div>

<!-- Hero service -->

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getHero() {
    return this.http.get(this.url + '/heroes');
  }

  createHero(requestBody: any) {
    return this.http.post(this.url + '/heroes', requestBody);
  }

  removeHero(id: number) {
    return this.http.delete(this.url + '/heroes/' + id);
  }
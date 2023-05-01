import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get(this.url + '/heroes');
  }

  addHero(heroName: string, universe:string){
    debugger
    const requestBody = {
      id: Math.floor(Math.random() * 90 + 10),
      name: heroName,
      universe: universe
    }
    return this.http.post(this.url + '/heroes', requestBody);
  }

  removeHero(id:number){
    return this.http.delete(this.url + '/heroes/' + id);
  }
}

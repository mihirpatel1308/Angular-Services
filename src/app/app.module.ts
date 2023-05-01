import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHeroesComponent } from './super-heroes/super-heroes.component';
import { AddSuperHeroComponent } from './add-super-hero/add-super-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { SuperHeroService } from './super-hero.service';
@NgModule({
  declarations: [
    AppComponent,
    SuperHeroesComponent,
    AddSuperHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

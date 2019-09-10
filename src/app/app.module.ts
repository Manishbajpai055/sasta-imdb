import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImdbMovieComponent } from './imdb-movie/imdb-movie.component';

import {  HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ImdbMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

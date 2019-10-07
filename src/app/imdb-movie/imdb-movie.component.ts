import { Component, OnInit } from '@angular/core';
import { ImdbMovieService } from '../service/imdb-movie.service';
import { observable } from 'rxjs';
import { Body } from '@angular/http/src/body';
import { jsonpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'app-imdb-movie',
  templateUrl: './imdb-movie.component.html',
  styleUrls: ['./imdb-movie.component.css']
})
export class ImdbMovieComponent implements OnInit {
movie :any;
  constructor(private imdbs : ImdbMovieService) { }

  ngOnInit() {
    this.loadAllUsers()
    
  }  
  private loadAllUsers() {
    this.imdbs.getmovie().subscribe(res => {
        this.movie = res;  
        console.log(this.movie)
        
    });
} 

}



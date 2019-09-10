import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ImdbMovieService {

  constructor( private http : Http) { }


    

getmovie(){
   return this.http.get('http://localhost:3000/posts/')  
      
  }
}

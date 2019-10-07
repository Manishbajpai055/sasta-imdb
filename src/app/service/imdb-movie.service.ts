import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImdbMovieService {

  constructor( private http : HttpClient) { }

 
    
 
getmovie(){
   return this.http.get('http://geekflux.northeurope.cloudapp.azure.com:3000/movies/')    
      
  } 
}       
 
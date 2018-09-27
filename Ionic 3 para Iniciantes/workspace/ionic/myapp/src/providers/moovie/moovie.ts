import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MoovieProvider {

  private baseApi = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
   
  }


  getLatestMovies() { //busca as informações no servidor

    return this.http.get(this.baseApi + "/movie/popular?api_key=<key>");
  }
}

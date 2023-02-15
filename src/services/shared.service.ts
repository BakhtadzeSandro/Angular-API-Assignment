import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  movieData: any = {};

  constructor() { }

  updateMovieData(data: any) {
    this.movieData = data;
  }

}

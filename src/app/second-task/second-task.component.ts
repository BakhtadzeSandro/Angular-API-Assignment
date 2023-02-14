import { Component, OnInit } from '@angular/core';
import { concatMap, forkJoin, from, map, mergeMap, Observable, reduce, switchMap, tap, toArray } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { Country } from '../interfaces/api.model';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {

  movie1 = "";
  movie2 = "";
  movie3 = "";

  result$: Observable<any> | undefined;

    getMovies() {
    const movies = [this.movie1, this.movie2, this.movie3];

    this.result$ = from(movies).pipe(
      concatMap((movie: string) => {
        return this.apiService.getMovie(movie).pipe(
          map((movieInfo: any) => {
            const lengthString: string = movieInfo.Runtime.replace(" min", "");
            const length = Number(lengthString);
            return length;
          })
        );
      }),
      reduce((acc, curr) => acc + curr, 0)
    );
  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
}


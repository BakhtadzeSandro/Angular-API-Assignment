import { Component, OnInit } from '@angular/core';
import {
  count,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { Country, FinalAPI } from '../interfaces/api.model';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css'],
})
export class FirstTaskComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  movieName: string = '';

  currentYear = new Date().getFullYear();

  result$: Observable<any> | undefined;

  getMovie(movieName: string) {
    this.result$ = this.apiService.getMovie(movieName).pipe(
      switchMap((movieInfo) => {
        const actors = movieInfo.Actors.split(',').map(
          (actor: string) => actor.trim().split(' ')[0]
        );
        const movieTitle = movieInfo.Title;
        const year = movieInfo.Year;
        const countries = movieInfo.Country.split(',').map((country: string) =>
          country.trim()
        );
        return forkJoin(
          countries.map((country: string) => {
            return this.apiService.getCountry(country);
          })
        ).pipe(
          map((countries: any) => {
            // console.log(countries);
            return {
              actorNames: actors,
              movieTitle,
              year,
              countries: countries.map((c: Country) => ({
                flag: c.flags.png,
                currency: c.currencies,
              })),
            };
          })
        );
      })
    )
    // console.log(this.result$);
  }


  ngOnInit() {}
}

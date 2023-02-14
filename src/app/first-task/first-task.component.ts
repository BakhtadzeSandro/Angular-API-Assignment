import { Component, OnInit } from '@angular/core';
import { count, forkJoin, of, switchMap } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  movieName: string = "";
  movieInfo: any;
  actors: string[] = [];
  countries: string[] = [];

  currentYear = new Date().getFullYear();

  getMovie(movieName: string) {
    this.apiService.getMovie(movieName).pipe(switchMap(val => {
      const actors = val.Actors.split(',').map((actor: string) => {
        const nameParts = actor.trim().split(' ');
        if (nameParts.length === 1) {
          return nameParts[0];
        } else {
          return nameParts[0];
        }
      });
      const year = val.Year;
      const countries = val.Country.split(",").map((country: string) => {
        return country.trim();
      });
      return forkJoin(countries.map((country: string) => {
        return this.apiService.getCountry(country)
      })) as any;
    })).subscribe(x => {
      // this.movieInfo = x;
      // this.actors = this.movieInfo.Actors.split(',').map((actor: string) => {
      //   const nameParts = actor.trim().split(' ');
      //   if (nameParts.length === 1) {
      //     return nameParts[0];
      //   } else {
      //     return nameParts[0];
      //   }
      // });
      // this.countries = this.movieInfo.Country.split(",").map((country: string) => {
      //   return country.trim();
      // });
      // this.countries.map(country => {
      //   this.apiService.getCountry(country).subscribe(x => console.log(x));
      // })
      console.log(x);
    });
  }

  ngOnInit() {
  }

}

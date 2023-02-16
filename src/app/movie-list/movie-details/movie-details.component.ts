import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { catchError, EMPTY, find, map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  moviesList$: Observable<any> | null = this.apiService.getMoviesList().pipe(
    map((movies: any) => Object.values(movies)),
    map((moviesArray: any[]) => {
      const movieId = this.activatedRoute.snapshot.params['movie-id'];
      return moviesArray.find((a: any) => a.id == movieId);
    }),
    catchError(() => {
      this.isData = false;
      return EMPTY;
    })
  );

  isData = true;

  currentYear = new Date().getFullYear();

  deleteMovie(id: string) {
    if (
      confirm('Press OK if you want to delete this movie from the favorites') ==
      true
    ) {
      this.apiService
        .deleteMovie(id)
        .subscribe((x) => this.router.navigateByUrl('/movie-list'));
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}
}

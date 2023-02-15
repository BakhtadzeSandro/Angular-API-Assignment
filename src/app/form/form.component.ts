import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  movieComment = '';
  selectedRating = 0;

  submitAdditionalData() {
    const additionalData = {
      comment: this.movieComment,
      rating: this.selectedRating,
    };
    const movieData = this.sharedService.movieData;
    movieData.comment = additionalData.comment;
    movieData.rating = additionalData.rating;
    this.apiService.saveMovie(movieData).subscribe((x) => console.log(x));
  }

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}
}

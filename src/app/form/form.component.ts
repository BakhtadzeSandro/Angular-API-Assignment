import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  movieComment = "";
  selectedRating = 0;

  submitAdditionalData(){
    const additionalData = {
      comment: this.movieComment,
      rating: this.selectedRating
    }
    this.apiService.saveMovie(additionalData).subscribe(x => console.log(x));
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}

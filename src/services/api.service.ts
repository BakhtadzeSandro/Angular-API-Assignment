import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {  

  constructor(private http: HttpClient) {}

  getMovie(movieName: string){
    return this.http.get<any>(environment.apiBase + movieName)
  }

  getCountry(countryName: string){
    return this.http.get(environment.countryApiBase + countryName + "?fullText=true");
  }

}

import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './cao';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor( private http : HttpClient) { 

  }

  getDog() : Observable<Dog> {
    return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random");
  }
}

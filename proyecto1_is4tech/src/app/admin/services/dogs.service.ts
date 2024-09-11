import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private url = 'https://dog.ceo/api/breeds/image/random';

  constructor(private soli: HttpClient) { }

  getDog(): Observable<any> {
    return this.soli.get(this.url);
  }
}

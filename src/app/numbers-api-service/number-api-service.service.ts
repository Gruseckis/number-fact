import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumberApiServiceService {
  private baseUrl = 'http://numbersapi.com/';

  constructor(private http: HttpClient) { }

  public getFact(searchNumber: number) {
    return this.http.get(`${this.baseUrl}${searchNumber}?json`);
  }

  public getRandomFact() {
    return this.http.get(`${this.baseUrl}random/trivia?json`);
  }
}

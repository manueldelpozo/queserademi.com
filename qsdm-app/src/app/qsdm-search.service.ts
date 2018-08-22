import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QsdmSearchService {

  url: string;

  constructor(private http: Http) {
      this.url = './assets/data/profesiones_angular.json';
  }

}

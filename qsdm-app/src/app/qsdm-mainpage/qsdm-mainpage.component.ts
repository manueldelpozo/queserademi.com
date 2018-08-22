import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { QsdmInputAutofillComponent } from '../qsdm-input-autofill/qsdm-input-autofill.component';

@Component({
  selector: 'app-qsdm-mainpage',
  templateUrl: './qsdm-mainpage.component.html',
  styleUrls: ['./qsdm-mainpage.component.css']
})
export class QsdmMainpageComponent {
  /* selectedValue: string;
  selectedOption: any;
  profesiones: any; */

  /* public model: any;

    search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    ) */

  /* constructor(private http: Http) {
     http.get('/assets/data/profesiones.json').subscribe(data => console.log(data), error => { console.log(error); } );
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  } */
}

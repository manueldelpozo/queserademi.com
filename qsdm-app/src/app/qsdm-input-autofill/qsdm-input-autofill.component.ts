import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
// import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
// import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

import {FormControl} from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-qsdm-input-autofill',
  templateUrl: './qsdm-input-autofill.component.html',
  styles: ['./qsdm-input-autofill.component.css'],
  // providers: [NgbTypeaheadConfig]
})

export class QsdmInputAutofillComponent implements OnInit {
  professions: any[];

  /*@ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();*/

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private http: HttpClient) {
    // customize default values of typeaheads used by this component tree
    // config.showHint = true;

    this.getJSON()
      .map(response => response)
      .subscribe(data => {
        this.professions = data;
      },
      error => {
        console.error(error);
      });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    let filteredProfessions = [];
    if (!this.professions) {
      return null;
    }
    if (!value) {
      return [];
    } else {
      filteredProfessions = this.professions
      .filter(profession => profession.name.toLowerCase().startsWith(value.toLowerCase()));
      // .filter(profession => profession.tokens.filter(token => token.toLowerCase().startsWith(value.toLowerCase())));
      return filteredProfessions.length
        ? filteredProfessions.map(prof => prof.name).filter((cur, pos, arr) => arr.indexOf(cur) === pos)
        : ['No hay resultados'];
    }
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/profesiones_angular.json');
  }

  /* search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term === '' ? []
      : this.professions.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  ) */

  // formatter = (x: {name: string}) => x.name;
}

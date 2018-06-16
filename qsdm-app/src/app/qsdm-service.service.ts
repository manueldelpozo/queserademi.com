import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class QsdmServiceService {
  title = new BehaviorSubject('Initial Title');

  constructor() { }

  showTodayDate() {
    const ndate = new Date();
    return ndate;
  }

  setTitle(title: string) {
    this.title.next(title);
  }
}

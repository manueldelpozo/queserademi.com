import { Injectable } from '@angular/core';

@Injectable()
export class QsdmServiceService {

  constructor() { }
  showTodayDate() {
    const ndate = new Date();
    return ndate;
 }
}

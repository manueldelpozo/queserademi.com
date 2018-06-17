import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-qsdm-footer',
  templateUrl: './qsdm-footer.component.html',
  styleUrls: ['./qsdm-footer.component.css'],
  animations: [
    trigger('myanimation', [
       state('open', style({
          transform: 'translateY(0px)'
       })),
       state('close', style({
          transform: 'translateY(50px)'
       })),
       transition('open <=> close', animate('100ms ease-in'))
    ])
  ]
})
export class QsdmFooterComponent implements OnInit {

  state = 'close';

  constructor() {}

  ngOnInit() {
  }

  toggleMenu() {
    this.state = this.state === 'close' ? 'open' : 'close';
  }

  findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, sel))) {}
    return el;
  }

}

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-qsdm-footer',
  templateUrl: './qsdm-footer.component.html',
  styleUrls: ['./qsdm-footer.component.css'],
  animations: [
    trigger('myanimation', [
      state('open', style({
        transform: 'translateY(0px)'
      })),
      state('openMobile', style({
        transform: 'translateY(0%)',
        height: '100%'
      })),
      state('close', style({
        transform: 'translateY(50px)'
      })),
      state('closeMobile', style({
        transform: 'translateY(20px)'
      })),
      transition('open <=> close', animate('200ms ease-in')),
      transition('openMobile <=> closeMobile', animate('200ms ease-in'))
    ])
  ]
})
export class QsdmFooterComponent implements OnInit {

  state = '';

  isMobile = false;

  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    const deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = (deviceInfo.device !== 'unknown');
  }

  ngOnInit() {
    this.closeMenu();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    if (this.isMobile) {
      this.state = this.state === 'closeMobile' ? 'openMobile' : 'closeMobile';
    } else {
      this.state = this.state === 'close' ? 'open' : 'close';
    }
  }

  closeMenu() {
    this.state = this.isMobile ? 'closeMobile' : 'close';
  }

}

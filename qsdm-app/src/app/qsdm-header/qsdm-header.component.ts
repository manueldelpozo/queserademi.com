import { Component, OnInit, SecurityContext } from '@angular/core';
import { QsdmServiceService } from '../qsdm-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-qsdm-header',
  templateUrl: './qsdm-header.component.html',
  styleUrls: ['./qsdm-header.component.css']
})

export class QsdmHeaderComponent implements OnInit {

  title = '';

  constructor(private headerTitleService: QsdmServiceService, private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.headerTitleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

  public get htmlProperty(): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this.title);
  }

}

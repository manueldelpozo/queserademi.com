import { Component, OnInit } from '@angular/core';
import { QsdmServiceService } from '../qsdm-service.service';

@Component({
  selector: 'app-qsdm-colabora',
  templateUrl: './qsdm-colabora.component.html',
  styleUrls: ['./qsdm-colabora.component.css']
})
export class QsdmColaboraComponent implements OnInit {

  constructor(private headerTitleService: QsdmServiceService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('colabora con queserademi, <br>de forma anónima y <br><strong>en sólo 2 minutos...');
  }

}

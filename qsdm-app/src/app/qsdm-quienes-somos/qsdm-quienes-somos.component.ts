import { Component, OnInit } from '@angular/core';
import { QsdmServiceService } from '../qsdm-service.service';

@Component({
  selector: 'app-qsdm-quienes-somos',
  templateUrl: './qsdm-quienes-somos.component.html',
  styleUrls: ['./qsdm-quienes-somos.component.css']
})
export class QsdmQuienesSomosComponent implements OnInit {

  constructor(private headerTitleService: QsdmServiceService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('Conoce al equipo detrás de <br><strong>queserademi</strong>');
  }
}

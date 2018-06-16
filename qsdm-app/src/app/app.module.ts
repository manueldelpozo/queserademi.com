import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QsdmHeaderComponent } from './qsdm-header/qsdm-header.component';
import { QsdmFooterComponent } from './qsdm-footer/qsdm-footer.component';
import { QsdmMainpageComponent } from './qsdm-mainpage/qsdm-mainpage.component';
import { QsdmQuienesSomosComponent } from './qsdm-quienes-somos/qsdm-quienes-somos.component';
import { QsdmColaboraComponent } from './qsdm-colabora/qsdm-colabora.component';

import { ROUTING } from './app.routing';
import { QsdmServiceService } from './qsdm-service.service';

@NgModule({
  declarations: [
    AppComponent,
    QsdmHeaderComponent,
    QsdmFooterComponent,
    QsdmQuienesSomosComponent,
    QsdmColaboraComponent,
    QsdmMainpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ROUTING
  ],
  providers: [QsdmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

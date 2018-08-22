import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { QsdmHeaderComponent } from './qsdm-header/qsdm-header.component';
import { QsdmFooterComponent } from './qsdm-footer/qsdm-footer.component';
import { QsdmMainpageComponent } from './qsdm-mainpage/qsdm-mainpage.component';
import { QsdmQuienesSomosComponent } from './qsdm-quienes-somos/qsdm-quienes-somos.component';
import { QsdmColaboraComponent } from './qsdm-colabora/qsdm-colabora.component';

import { ROUTING } from './app.routing';
import { QsdmServiceService } from './qsdm-service.service';
import { QsdmInputAutofillComponent } from './qsdm-input-autofill/qsdm-input-autofill.component';

@NgModule({
  declarations: [
    AppComponent,
    QsdmHeaderComponent,
    QsdmFooterComponent,
    QsdmQuienesSomosComponent,
    QsdmColaboraComponent,
    QsdmMainpageComponent,
    QsdmInputAutofillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ROUTING,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatInputModule,
    DeviceDetectorModule.forRoot(),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [QsdmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

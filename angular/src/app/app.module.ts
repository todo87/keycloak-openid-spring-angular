import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorDialogModal} from "./home/popups/error-dialog/error-dialog.modal";
import {InfoDialogModal} from "./home/popups/info-dialog/info-dialog.modal";
import {SuccessDialogModal} from "./home/popups/success-dialog/success-dialog.modal";
import {GenericDialog} from "./home/popups/generic-dialog/generic-dialog.modal";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenericDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ErrorDialogModal, InfoDialogModal, SuccessDialogModal, GenericDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }

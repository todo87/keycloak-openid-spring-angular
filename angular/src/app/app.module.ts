import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GenericDialog} from "./home/utils/generic-dialog/component/generic-dialog.modal";

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
  providers: [GenericDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }

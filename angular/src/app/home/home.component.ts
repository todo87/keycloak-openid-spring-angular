import {Component, OnInit} from '@angular/core';
import {ModalService} from "./popups/service/modal.service";
import {ModalServiceConfig} from "./popups/service/modal-service-config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {

  }

  openYesNo() {
    this.modalService.openGenericModal(new ModalServiceConfig('12312', 'rfsf', 'yes-no')).subscribe(resp => {
      console.log(resp);
    });
  }

  info() {
    this.modalService.openGenericModal(new ModalServiceConfig('12312', 'rfsf', "info", "info")).subscribe(resp => {
      console.log(resp);
    });
  }

  success() {
    this.modalService.openGenericModal(
      new ModalServiceConfig('12312', 'rfsf', 'info', 'success')
    ).subscribe(resp => {
      console.log(resp);
    });
  }

  danger() {
    this.modalService.openGenericModal(
      new ModalServiceConfig('12312', 'rfsf', 'info', 'warning')
    ).subscribe(resp => {
      console.log(resp);
    });
  }

  error() {
    this.modalService.openGenericModal(
      new ModalServiceConfig('12312', 'rfsf', 'info', 'error')
    ).subscribe(resp => {
      console.log(resp);
    });
  }

  custom(customModal) {
    this.modalService.openCustomModal(customModal);
  }

  customOk(closeMethod) {
    closeMethod();
  }

  customCancel(closeMethod) {
    closeMethod();
  }

}

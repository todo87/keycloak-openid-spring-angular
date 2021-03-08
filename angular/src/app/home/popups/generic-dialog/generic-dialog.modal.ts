import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.modal.html'
})
export class GenericDialog {

  @Output()
  result: EventEmitter<string> = new EventEmitter();

  public bsClass = '';

  @Input()
  set alertType(alertType: string) {
    switch (alertType) {
      case 'success':
        this.bsClass = 'alert-success';
        break;
      case 'info':
        this.bsClass = 'alert-info';
        break;
      case 'warning':
        this.bsClass = 'alert-warning';
        break;
      case 'error':
        this.bsClass = 'alert-danger';
        break;
      default :
        this.bsClass = '';
        break;
    }
    console.log(alertType);
    console.log(this.bsClass);
  }
  @Input()
  title: string;
  @Input()
  message: string;
  @Input()
  footer: string;
  @Input()
  showCancel: boolean;
  @Input()
  okText: string;
  @Input()
  cancelText: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  ok() {
    this.result.emit('ok');
    this.activeModal.close();
  }

  cancel() {
    this.result.emit('cancel');
    this.activeModal.close();
  }

  dismiss() {
    this.result.emit('close');
    this.activeModal.close();
  }

}

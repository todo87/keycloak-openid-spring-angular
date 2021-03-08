import {EventEmitter, Injectable} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalServiceConfig} from "./modal-service-config";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import {GenericDialog} from "../generic-dialog/generic-dialog.modal";

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modalService: NgbModal) {
  }

  openGenericModal(modelConfig: ModalServiceConfig): EventEmitter<string> {
    const modalRef = this.modalService.open(GenericDialog, modelConfig.options);
    modalRef.componentInstance.alertType = modelConfig.alertType;
    modalRef.componentInstance.title = modelConfig.title;
    modalRef.componentInstance.message = modelConfig.message;
    modalRef.componentInstance.footer = modelConfig.footer;
    modalRef.componentInstance.showCancel = modelConfig.type === 'yes-no' ;
    modalRef.componentInstance.okText = modelConfig.okText;
    modalRef.componentInstance.cancelText = modelConfig.cancelText;
    return modalRef.componentInstance.result;
  }

  openCustomModal(content): NgbModalRef {
    return this.modalService.open(content);
  }


}

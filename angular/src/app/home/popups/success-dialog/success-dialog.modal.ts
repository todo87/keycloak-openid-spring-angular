import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-success-dialog',
    templateUrl: './success-dialog.modal.html'
})
export class SuccessDialogModal {
    @Output()
    result: EventEmitter<boolean> = new EventEmitter();

    @Input()
    message: string;

    @Input()
    title: string;

    constructor(public activeModal: NgbActiveModal) {
    }

    ok() {
        this.result.emit(true);
        this.activeModal.close();
    }
}

import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-error-dialog',
    templateUrl: './error-dialog.modal.html'
})
export class ErrorDialogModal {
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

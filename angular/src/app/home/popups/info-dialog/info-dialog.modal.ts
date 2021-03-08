import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-info-dialog',
    templateUrl: './info-dialog.modal.html'
})
export class InfoDialogModal {
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

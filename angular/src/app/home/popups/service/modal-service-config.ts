import {NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";

export class ModalServiceConfig {

  constructor(
    public title: string,
    public message: string,
    public type: 'info' | 'yes-no' = 'info',
    public alertType: '' | 'success' | 'info' | 'warning' | 'error' = '',
    public options: NgbModalOptions = {},
    public okText: string = 'Ok',
    public cancelText: string = 'Cancel',
    public footer: string = '',
  ) {}

}

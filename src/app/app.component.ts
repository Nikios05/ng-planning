import {Component, Input} from '@angular/core';
import {OpenModalService} from './open-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input() openModal: boolean;
  constructor(private openModalSrv: OpenModalService) {
  }

  getModal() {
    this.openModalSrv.openThisModal = true;
    // this.openModal = this.openModalSrv.openThisModal;
    console.log(this.openModalSrv.openThisModal);
  }
}

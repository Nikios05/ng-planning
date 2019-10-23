import {Component, Input} from '@angular/core';
import {OpenModalService} from './open-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private openModalSrv: OpenModalService) {
  }

  getModal() {
    this.openModalSrv.openThisModal = true;
  }
}

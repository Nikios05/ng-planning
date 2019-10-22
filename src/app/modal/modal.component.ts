import {Component, Input, OnInit} from '@angular/core';
import {OpenModalService} from '../open-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() openModal: boolean;
  @Input() modalAnim = false;
  constructor(private openModalSrv: OpenModalService) {
  }

  ngOnInit() {

  }

  closeModal() {
    this.modalAnim = this.openModal;
    setTimeout(() => {
      this.openModalSrv.openThisModal = false;
      this.openModal = false;
      this.modalAnim = false;
    }, 650);
  }

  // toggleClass(event: any, class: string) {
  //   console.log(event.target);
  // }
}

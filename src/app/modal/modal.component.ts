import {Component, Input, OnInit} from '@angular/core';
import {OpenModalService} from '../open-modal.service';
import jsonUsersList from '../../assets/user-name-list.json';

export interface UsersList {
  'id-user': number;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() openModal: boolean;
  @Input() modalAnim = false;
  usersList: UsersList[];
  constructor(private openModalSrv: OpenModalService) {
    this.usersList = this.getUsersList();
  }

  ngOnInit() {
  }

  getUsersList() {
    const usersArr = [];
    jsonUsersList.forEach((item) => {
      usersArr.push(item);
    });
    return usersArr;
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

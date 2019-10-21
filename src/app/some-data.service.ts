import {Injectable} from '@angular/core';



@Injectable({ providedIn: 'root' })
export class SomeDataService {
  sessionDeclension: string;
  tableListLength: number;
  getSessionDeclension() {
    if (this.tableListLength === 1) {
      this.sessionDeclension = 'сессия';
    } else if ((this.tableListLength >= 2) && (this.tableListLength <= 4)) {
      this.sessionDeclension = 'сессии';
    } else {
      this.sessionDeclension = 'сессий';
    }
    return this.sessionDeclension;
  }
}

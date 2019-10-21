import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import jsonTableList from '../../../assets/table-list.json';
import {SomeDataService} from '../../some-data.service';

export interface TableList {
  coach: string;
  members: string;
  name: string;
  date: string;
  progress: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // @ViewChildren('tableBtn') tableBtn: QueryList<any>;
  tableList: TableList[];
  // btnArray: any[];
  // indexBtn: number;
  getTableList() {
    const activeTable = [];
    jsonTableList.forEach((item) => {
        activeTable.push(item);
    });
    return activeTable;
  }
  constructor(private someSrv: SomeDataService) {
    this.tableList = this.getTableList();
    someSrv.tableListLength = this.tableList.length;
  }

  ngOnInit() {
  }

}

// Появление меню в таблице
// getMenuTable() {
//   const newArray = [];
//   this.tableBtn.forEach((item, index) => {
//     newArray.push(item.nativeElement);
//     item.nativeElement.addEventListener('mousedown', () => {
//       this.indexBtn = index;
//     });
//   });
//   this.btnArray = newArray;
//   console.log(this.btnArray[this.indexBtn]);
//
//   const btnMenu = document.createElement('div');
//   btnMenu.className = 'menuTable';
//   btnMenu.innerHTML = `
//         <ul class="menuTable__list">
//             <li class="menuTable__item">Редактировать</li>
//             <li class="menuTable__item">Удалить слот</li>
//         </ul>
//     `;
//
//   this.btnArray[this.indexBtn].prepend(btnMenu);
// }

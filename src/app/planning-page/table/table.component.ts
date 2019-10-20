import {Component, Input, OnInit} from '@angular/core';
import jsonTableList from '../../../assets/table-list.json';

export interface TableList {
  progress: object;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableList: TableList[];
  getTableList() {
    const activeTable = [];
    jsonTableList.forEach((item) => {
        activeTable.push(item);
    });
    return activeTable;
  }
  constructor() {
    this.tableList = this.getTableList();
  }

  ngOnInit() {
  }

}

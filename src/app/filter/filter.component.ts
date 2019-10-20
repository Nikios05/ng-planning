import {Component, OnInit} from '@angular/core';
import jsonFilterList from '../../assets/filter-list.json';

export interface FilterList {
  name: string;
  active: boolean;
  title: string;
  start: string;
  list: object;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterList: FilterList[];
  getActiveFilter() {
    const activeFilter = [];
    jsonFilterList.forEach((item) => {
      if (item.active) {
        activeFilter.push(item);
      }
    });
    return activeFilter;
  }
  constructor() {
    this.filterList = this.getActiveFilter();
  }

  ngOnInit() {
  }

}



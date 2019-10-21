import {Component, Input, OnInit} from '@angular/core';
import jsonFilterList from '../../assets/filter-list.json';
import {SomeDataService} from '../some-data.service';

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
  sessionDeclension: string;
  getActiveFilter() {
    const activeFilter = [];
    jsonFilterList.forEach((item) => {
      if (item.active) {
        activeFilter.push(item);
      }
    });
    return activeFilter;
  }
  constructor(private someSrv: SomeDataService) {
    this.filterList = this.getActiveFilter();
  }

  ngOnInit() {
  }

}



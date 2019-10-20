import {Component, Input, OnInit} from '@angular/core';
import {FilterList} from '../filter.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() filter: FilterList;

  constructor() {
  }

  ngOnInit() {
  }
}

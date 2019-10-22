import {Component, Input, OnInit, Output} from '@angular/core';
import {FilterList} from '../filter.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() filter: FilterList;
  @Input() title: any;
  @Input() start: any;
  @Input() modalSelectProgram = false;
  @Input() modalSelectEvent = false;

  constructor() {
  }

  ngOnInit() {
    if (!this.title && !this.start) {
      this.title = this.filter.title;
      this.start = this.filter.start;
    }
  }
}

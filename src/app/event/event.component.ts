import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() modalSelectEventIcon = false;
  @Input() title: string;
  @Input() selectEvent: object;
  constructor() { }

  ngOnInit() {
  }

}

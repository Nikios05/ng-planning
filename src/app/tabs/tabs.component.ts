import {Component, Input, OnInit} from '@angular/core';
import {OpenModalService} from '../open-modal.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tab1: string;
  @Input() tab2: string;
  @Input() modalTabs = false;
  @Input() changeTabs = false;

  constructor(private openModalSrv: OpenModalService) { }

  ngOnInit() {
  }

  changeToActive(event: any) {
    const activeTab = event.target.classList;
    if (!activeTab.contains('pl-tabs__item--active')) {
      activeTab.add('pl-tabs__item--active');
      this.changeTabs = !this.changeTabs;
      this.openModalSrv.openOtherTab = this.changeTabs;
      console.log(this.openModalSrv.openOtherTab);
    }
  }
}

import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.tabs.first.isActive = true;
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach((tab) => (tab.isActive = false));
    selectedTab.isActive = true;
  }
}

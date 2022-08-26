import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabComponent} from './tab/tab.component';
import {TabsContainerComponent} from './tabs-container/tabs-container.component';



@NgModule({
  declarations: [
    TabComponent,
    TabsContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    TabsContainerComponent
  ]
})
export class TabsModule { }

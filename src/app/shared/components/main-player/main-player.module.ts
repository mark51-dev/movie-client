import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPlayerComponent} from './main-player.component';



@NgModule({
  declarations: [
    MainPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPlayerComponent
  ]
})
export class MainPlayerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItemsFilterComponent } from './video-items-filter/video-items-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  declarations: [VideoItemsFilterComponent, CustomSelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [VideoItemsFilterComponent],
})
export class VideoItemsFilterModule {}

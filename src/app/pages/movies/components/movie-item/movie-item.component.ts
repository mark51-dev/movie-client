import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from 'src/app/shared/utils/video.service-abstraction';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: IVideo;
  constructor() {}

  ngOnInit(): void {}
}

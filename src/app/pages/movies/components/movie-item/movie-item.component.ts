import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IVideo } from 'src/app/pages/utils/video.service-abstraction';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: IVideo;
  constructor() {}

  ngOnInit(): void {}
}

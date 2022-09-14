import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

declare let shaka: any;

@Component({
  selector: 'app-main-player',
  templateUrl: './main-player.component.html',
  styleUrls: ['./main-player.component.scss'],
})
export class MainPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoElementRef: ElementRef | undefined;
  @ViewChild('videoContainer') videoContainerRef: ElementRef | undefined;
  @Input() poster: string = '/coverUrl.jpg';
  @Input() movieId: string = '298';
  @Input() manifestName: string = 'sample-manifest-full.mpd';

  videoElement: HTMLVideoElement | undefined;
  videoContainerElement: HTMLDivElement | undefined;
  player: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.videoElement = this.videoElementRef?.nativeElement;
      this.videoContainerElement = this.videoContainerRef?.nativeElement;
      this.initPlayer();
    } else {
      console.error('Browser not supported!');
    }
  }

  private initPlayer() {
    this.player = new shaka.Player(this.videoElement);
    this.player.configure({
      streaming: {
        bufferingGoal: 30,
      },
    });

    const ui = new shaka.ui.Overlay(
      this.player,
      this.videoContainerElement,
      this.videoElement
    );
    const config = {
      controlPanelElements: [
        'time_and_duration',
        'play_pause',
        'volume',
        'picture_in_picture',
        'fullscreen',
      ],
      seekBarColors: {
        base: 'rgba(184, 184, 184, 0.8)',
        buffered: 'rgba(255, 255, 255, 1)',
        played: 'rgb(216, 31, 38)',
      },
    };
    ui.configure(config);

    let videoUrl = `http://localhost:3000/${this.movieId}/${this.manifestName}`;

    this.player
      .load(videoUrl)
      .then(() => {
        // this.videoElement?.play();
      })
      .catch((e: any) => {
        console.error(e);
      });
  }
}

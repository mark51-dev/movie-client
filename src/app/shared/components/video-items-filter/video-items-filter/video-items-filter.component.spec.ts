import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoItemsFilterComponent } from './video-items-filter.component';

describe('VideoItemsFilterComponent', () => {
  let component: VideoItemsFilterComponent;
  let fixture: ComponentFixture<VideoItemsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoItemsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoItemsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

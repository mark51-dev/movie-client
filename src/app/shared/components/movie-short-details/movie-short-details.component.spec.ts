import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShortDetailsComponent } from './movie-short-details.component';

describe('MovieShortDetailsComponent', () => {
  let component: MovieShortDetailsComponent;
  let fixture: ComponentFixture<MovieShortDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieShortDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieShortDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

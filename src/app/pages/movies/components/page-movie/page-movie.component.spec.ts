import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieComponent } from './page-movie.component';

describe('PageMovieComponent', () => {
  let component: PageMovieComponent;
  let fixture: ComponentFixture<PageMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

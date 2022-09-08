import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

const START_YEAR: number = 2000;

@Component({
  selector: 'app-video-items-filter',
  templateUrl: './video-items-filter.component.html',
  styleUrls: ['./video-items-filter.component.scss'],
})
export class VideoItemsFilterComponent implements OnInit {
  form: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      yearFrom: [],
      yearTo: [],
      genre: [],
      country: [],
    });
  }

  get generateYears(): string[] {
    const yearsOffset = new Date().getFullYear() - START_YEAR;
    return Object.keys(Array(yearsOffset + 1).fill(0)).map((item) =>
      (parseInt(item) + START_YEAR).toString()
    );
  }

  get genres(): string[] {
    return ['ужасы', 'комедия'];
  }

  get countries(): string[] {
    return ['США', 'Канада'];
  }

  resetForm(): void {
    this.form.reset();
  }
}

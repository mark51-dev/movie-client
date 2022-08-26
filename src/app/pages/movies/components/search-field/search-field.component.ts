import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Output() searchValueEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  searchHandler(searchValue: any) {
    this.searchValueEmitter.emit(searchValue.target.value);
    console.log(searchValue.target.value);
  }
}

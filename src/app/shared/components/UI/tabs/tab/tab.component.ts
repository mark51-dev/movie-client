import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() title: string = '';
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss'],
})
export class ToastItemComponent implements OnInit {
  @Input() type!: string;
  @Input() message!: string;
  constructor() {}

  ngOnInit(): void {}
}

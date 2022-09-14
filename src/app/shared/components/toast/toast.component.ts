import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  ngOnInit(): void {}
}

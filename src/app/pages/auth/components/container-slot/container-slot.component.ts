import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-slot',
  templateUrl: './container-slot.component.html',
  styleUrls: ['./container-slot.component.scss'],
})
export class ContainerSlotComponent implements OnInit {
  isActive: boolean = false;
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}

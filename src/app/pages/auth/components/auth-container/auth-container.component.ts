import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { ContainerSlotComponent } from '../container-slot/container-slot.component';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(ContainerSlotComponent)
  containerSlotComponent: QueryList<ContainerSlotComponent> = new QueryList();
  constructor() {}

  ngAfterContentInit(): void {
    this.containerSlotComponent.first.isActive = true;
  }

  selectSlot(slot: ContainerSlotComponent): void {
    this.containerSlotComponent.forEach((item) => (item.isActive = false));
    slot.isActive = true;
  }

  ngOnInit(): void {}
}

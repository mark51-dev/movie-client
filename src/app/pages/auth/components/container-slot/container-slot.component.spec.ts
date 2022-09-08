import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSlotComponent } from './container-slot.component';

describe('ContainerSlotComponent', () => {
  let component: ContainerSlotComponent;
  let fixture: ComponentFixture<ContainerSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

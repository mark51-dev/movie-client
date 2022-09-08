import {
  Component,
  forwardRef,
  Input,
  Renderer2,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomSelectComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  constructor(private renderer: Renderer2) {}

  @ViewChild('selectInput', { static: true }) selectInput!: ElementRef;
  @Input()
  valueList: string[] = [];
  value: string = '';

  showDropdown: boolean = false;

  valueChange: Function = () => {};
  valueToched: Function = () => {};

  writeValue(obj: any): void {
    this.value = obj;
    this.valueChange();
    this.valueToched();
  }

  registerOnChange(fn: any): void {
    this.valueChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.valueToched = fn;
  }

  selectYearHandler(year: string): void {
    if (year.toString() === this.value) {
      return;
    }
    this.writeValue(year);
    this.showDropdown = !this.showDropdown;
  }

  clickHandle() {
    this.showDropdown = !this.showDropdown;
  }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      e.stopPropagation();
      if (e.target !== this.selectInput.nativeElement) {
        this.showDropdown = false;
      }
    });
  }
}

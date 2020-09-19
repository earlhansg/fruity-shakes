import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => OrderCounterComponent),
  multi: true
};


@Component({
  selector: 'app-order-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  templateUrl: './order-counter.component.html',
  styleUrls: [ './order-counter.component.scss' ]
})
export class OrderCounterComponent implements ControlValueAccessor {

  @Input() step = 1;
  @Input() min = 1;
  @Input() max = 99;

  private onTouch: () => void;
  private onModelChange: (val: number) => void;

  value = 10;

  registerOnTouched(fn): void {
    this.onTouch = fn;
  }

  registerOnChange(fn): void {
    this.onModelChange = fn;
  }

  writeValue(value): void {
    this.value = value || 0;
  }

  increment(): void {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  decrement(): void {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

}
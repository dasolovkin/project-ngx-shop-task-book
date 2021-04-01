import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Options } from 'ng5-slider';

@Component({
  selector: 'ngx-shop-price-slider',
  templateUrl: './price-slider.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PriceSliderComponent,
      multi: true,
    },
  ]
})
export class PriceSliderComponent implements ControlValueAccessor, OnInit {  
  public pricesControl = this._fb.control([20, 80]);
  public onChange: Function = (value: any) => {};
  public options: Options = {
    animate: false,
    floor: 0,
    hideLimitLabels: true,
    hidePointerLabels: true,
    ceil: 2000,
  };

  constructor(
    private readonly _fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {    
    this.pricesControl.valueChanges.subscribe((price: number[]) => {
      this.pricesControl.setValue(price, { emitEvent: false });
      this.cdr.markForCheck();
    });
  }

  public writeValue(prices: number[]) {
    const low = Number(prices[0] ?? this.options.floor);
    const high = Number(prices[1] ?? this.options.ceil);
    this.pricesControl.setValue([low, high], { emitEvent: false });
  }
  
  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(): void {

  }

  public applyFilter() {
    this.onChange(this.pricesControl.value);
  }    
}

import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor,  } from '@angular/forms';
import { Options } from 'ng5-slider';

@Component({
  selector: 'ngx-shop-price-inputs',
  templateUrl: './price-inputs.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PriceInputsComponent,
      multi: true,
    },
  ],
})
export class PriceInputsComponent implements ControlValueAccessor,  OnInit {
  @Input()
  public options!: Options;
  
  public pricesGroup = this._fb.group({
    low: [0],
    high: [2000],
  });  

  public onChange!: Function;

  constructor(
    private readonly _fb: FormBuilder    
  ) {}

  public ngOnInit(): void {    
    this.pricesGroup.valueChanges.subscribe(({ low, high }): void => {
      this.onChange([low, high]);
    });
  }

  public writeValue(prices: number[]) {
    const low = prices[0] ?? 0;
    const high = prices[1] ?? 2000;
    this.pricesGroup.setValue({ low, high }, { emitEvent: false });
  }
  
  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(): void {

  }
}

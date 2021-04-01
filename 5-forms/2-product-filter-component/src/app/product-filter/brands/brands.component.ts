import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-shop-brands',
  templateUrl: './brands.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BrandsComponent,
      multi: true,
    },
  ],
  styleUrls: ['./brands.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent implements ControlValueAccessor {
  @Input()
  public brands: string[] = null;

  @Input()
  public selectedBrands: string[] = [];
  
  public onChange!: Function;  

  public isShow: boolean = false;  

  public show() {
    this.isShow = !this.isShow;
  }

  public brandsToShow: string[] = [];

  public writeValue(brands: string[]): void {
    this.brandsToShow = brands;
  }

  public check(brand: string) {    
    const index = this.selectedBrands.findIndex(
      br => br === brand
    );
    
    if (index < 0) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }
        
    if (this.onChange) {
      this.onChange(this.selectedBrands);
    }    
  }

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(): void {

  }

  public showBrand(index: number) {
    if (this.isShow) {
      return true;
    }

    if (index <= 5) {
      return true;
    }

    return false;
  }  
}

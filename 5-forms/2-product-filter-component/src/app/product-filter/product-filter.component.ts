import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-shop-product-filter',
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent implements OnInit {
  @Input() 
  public brands: string[] = null;

  @Output()
  public confirm: EventEmitter<any> = new EventEmitter();

  public form = this.formBuilder.group({
    brands: [[]],
    searchByName: [''],
    prices: [[0, 2000]],
  });

  public selectedPrices: number[] = [];

  public selectedBrands: string[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.confirm.emit(data);
    });
  }
}

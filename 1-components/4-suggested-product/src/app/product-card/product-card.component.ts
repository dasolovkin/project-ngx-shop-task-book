import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: IProduct = {} as IProduct;
  @Output() goToProduct: EventEmitter<any> = new EventEmitter();

  redirectTo() {
    this.goToProduct.emit();
  }
}

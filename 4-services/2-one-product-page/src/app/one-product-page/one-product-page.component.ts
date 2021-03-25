import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/4-services/products';

@Component({
  selector: 'ngx-shop-one-product-page',
  templateUrl: './one-product-page.component.html',
})
export class ProductComponent {
  @Input() public product: IProduct = null;

  public goToBasket(){}
  public addToCart(){}
  public addFeedback(value: string){}
}

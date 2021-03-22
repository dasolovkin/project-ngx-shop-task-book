import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input() public product?: IProduct = null;
  @Output() public addToCart: EventEmitter<string> = new EventEmitter();

  public isShow = false;

  public addToBasket(id): void {
    this.addToCart.emit(id);
  }

  public show(): void {
    this.isShow = !this.isShow;
  }
}

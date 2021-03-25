import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent {
  @Input() public categories: any = null;
  @Input() public products: any = null;

  public goToProduct() {
    
  }
  public goToBasket() {

  }

  public redirectTo(subCategory: string) {

  }  
}

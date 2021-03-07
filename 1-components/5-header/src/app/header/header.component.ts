import { Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() goToBasket: EventEmitter<any> = new EventEmitter();

  counter = 5;

  redirectTo() {
    this.goToBasket.emit();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Input() public categories: ICategory[] = [];
  @Output() public subCategorySelectEvent: EventEmitter<string> = new EventEmitter();

  public currentIndex: number = null;
  public currentCategory = '';

  public showSubCategories(index: number): void {
    this.currentIndex = index;
  }

  public subCategorySelect(subCategory: string): void {
    this.subCategorySelectEvent.emit(subCategory);
  }
}

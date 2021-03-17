import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    countOfReviews = countOfReviews || 0;

    if (countOfReviews <= 0) {
      return 'Нет отзывов';
    }

    const countOfReviewsUnits = countOfReviews - Math.trunc(countOfReviews / 10) * 10;
    const countOfReviewsDigits = Math.trunc((countOfReviews - Math.trunc(countOfReviews / 100) * 100 - countOfReviewsUnits) / 10);

    return countOfReviewsDigits === 1 || countOfReviewsUnits === 0 || countOfReviewsUnits > 4
      ? countOfReviews + ' отзывов'
      : countOfReviewsUnits === 1
          ? countOfReviews + ' отзыв'
          : countOfReviews + ' отзыва';
  }
}

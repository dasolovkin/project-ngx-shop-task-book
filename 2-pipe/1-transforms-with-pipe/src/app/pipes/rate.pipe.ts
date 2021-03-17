import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    value = value || 0;
    const intValue = Math.trunc(value);
    const valueDiv = value - intValue;

    return valueDiv < 0.25
      ? intValue
      : valueDiv >= 0.25 && valueDiv < 0.75
        ? intValue + 0.5
        : intValue + 1;
  }
}

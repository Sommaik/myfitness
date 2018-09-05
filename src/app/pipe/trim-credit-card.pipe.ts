import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: string, args?: string): any {
    const _first = value.substr(0, 3);
    const _last = value.substr(13, 3);
    let _mid = '';
    for (let i = 0; i < 10; i++) {
      _mid += args;
    }
    return _first + _mid + _last;
  }

  // {{'1234567890123456' | trimCreditCard:'#'}}
  // 123XXXXXXXXXX456

}

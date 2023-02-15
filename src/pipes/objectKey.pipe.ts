import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from 'src/app/interfaces/api.model';

@Pipe({name: 'objectKey'})
export class ObjectKeyPipe implements PipeTransform {
  transform(value: Currency): string {
    return Object.keys(value)[0];
  }
}

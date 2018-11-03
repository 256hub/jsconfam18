import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from '../item/api.service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  constructor(private _api: ApiService) {}
  
  transform(translationId: string) {
    return this._api.getTranslation(translationId);
  }
}

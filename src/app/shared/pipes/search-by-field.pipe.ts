import { IVideo } from './../../pages/utils/video.service-abstraction';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByField',
})
export class SearchByFieldPipe implements PipeTransform {
  transform(value: IVideo[], searchByString: string): IVideo[] {
    return value.filter(
      (item) =>
        item.nameRu.toLowerCase().indexOf(searchByString.toLowerCase()) !== -1
    );
  }
}

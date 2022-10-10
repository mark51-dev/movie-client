import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../models/movie.interface';

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

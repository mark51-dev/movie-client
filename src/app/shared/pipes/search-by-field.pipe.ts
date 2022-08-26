import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByField',
})
export class SearchByFieldPipe implements PipeTransform {
  transform(value: any[], searchByString: string): any[] {
    let res = value?.filter(
      (item) =>
        item.nameRu.toLowerCase().indexOf(searchByString.toLowerCase()) !== -1
    );
    console.log('Pipe', searchByString);
    return res;
  }
}

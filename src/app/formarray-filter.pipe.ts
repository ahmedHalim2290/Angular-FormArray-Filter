import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'formarrayFilter',
})
export class FormarrayFilterPipe implements PipeTransform {
  /**
   * @areaList formarray
   * @areaname search text
   * @key      key to filter, id, name etc.
   */
  transform(areaList: any, areaname: string, key: string): any[] {
    if (!areaname || areaname.length == 0 || !key || key.length == 0) {
      return areaList;
    } else if (areaList) {
      return areaList.filter(
        (listing: FormGroup) =>
          this.replaceTurkish(
            listing.get(key).value.toString().replace(/-/g, '')
          )
            .toLocaleLowerCase()
            .indexOf(this.replaceTurkish(areaname).toLocaleLowerCase()) > -1
      );
    }
  }

  replaceTurkish(data: string) {
    return data
      .replace('Ğ', 'g')
      .replace('Ü', 'u')
      .replace('Ş', 's')
      .replace('I', 'i')
      .replace('İ', 'i')
      .replace('Ö', 'o')
      .replace('Ç', 'c')
      .replace('ğ', 'g')
      .replace('ü', 'u')
      .replace('ş', 's')
      .replace('ı', 'i')
      .replace('ö', 'o')
      .replace('ç', 'c');
  }
}

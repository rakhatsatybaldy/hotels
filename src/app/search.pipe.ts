import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'seacrh'
})
export class SearchPipe implements PipeTransform{
  transform(hotels , value) {
    return hotels.filter(hotel => {
      return hotel.name.includes(value)
    })
  }
}

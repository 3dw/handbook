import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the InCatagory pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'in-catagory'
})
@Injectable()
export class InCatagory {
  /*
    Takes a value and makes it lowercase.
   */
  transform(list: any[], c) {
    return list.filter(function (o) {
      return o.c == c;
    })
  }
}

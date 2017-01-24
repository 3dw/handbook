import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the InCatagory pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'inCatagory'
})
@Injectable()
export class InCatagory implements PipeTransform{
  transform(list: any[], c) {
    return list.filter(function (o) {
      return o.c == c;
    })
  }
}

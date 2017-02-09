import { Component } from '@angular/core';

/*
  Generated class for the RandomImage component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'random-image',
  templateUrl: 'random-image.html'
})
export class RandomImageComponent {

  text: string;

  constructor() {
    console.log('Hello RandomImage Component');
    this.text = 'Hello World';
  }

}

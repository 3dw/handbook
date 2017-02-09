import { Component } from '@angular/core';

/*
  Generated class for the Slideshow component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'slideshow',
  templateUrl: 'slideshow.html'
})
export class SlideshowComponent {

  text: string;

  constructor() {
    console.log('Hello Slideshow Component');
    this.text = 'Hello World';
  }

}

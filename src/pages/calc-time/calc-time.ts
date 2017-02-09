import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CalcTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calc-time',
  templateUrl: 'calc-time.html'
})
export class CalcTimePage {
	week: number
  Math: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.week = 1;
    this.Math = Math;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcTimePage');
  }

  goBack(e) {
    if (e.direction == 2) {
        //direction 2 = right to left swipe.
        this.navCtrl.pop()
    }
  }
}

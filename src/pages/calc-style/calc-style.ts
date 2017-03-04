import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OfflineStyleTest } from '../../providers/offline-handbook';
/*
  Generated class for the CalcStyle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calc-style',
  templateUrl: 'calc-style.html',
  providers: [ OfflineStyleTest ]
})
export class CalcStylePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcStylePage');
  }

}

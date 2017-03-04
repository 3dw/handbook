import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OfflineStyletest } from '../../providers/offline-styletest';

/*
  Generated class for the CalcStyle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calc-style',
  templateUrl: 'calc-style.html',
  providers: [ OfflineStyletest ]
})
export class CalcStylePage {
  qs: any[];

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public offlineStyletest:  OfflineStyletest) {

  	this.qs = offlineStyletest.data.qs;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcStylePage');
  }
}  


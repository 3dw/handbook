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
  vark: any[];

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public offlineStyletest:  OfflineStyletest) {

  	this.qs = offlineStyletest.data.qs;
    this.vark = ['v','a','r','k'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcStylePage');
  }


  //要算出所有風格的統計數目
  getFinal() {
    var ans = [0,0,0,0];
    for (var k = 0; k < this.vark.length; ++k) {
      var c = 0;
      var s = this.vark[k];
      for (var j = 0; j < this.qs.length; ++j) {
        var q = this.qs[j]
        var i = this.vark.indexOf(s);
        if (q.checked[i]) c++;
      }
      ans[k] = c;
    }
  }
  

  getNum() {
    return 3;

  }

  getAdvice( ) {
    return 3;
    
  }


}  


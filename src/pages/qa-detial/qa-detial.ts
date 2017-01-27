import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the QaDetial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-qa-detial',
  templateUrl: 'qa-detial.html'
})
export class QaDetialPage {
	faq: Array<{q: string, c: string, as: string[], es: any[]}>;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams) {

    // If we navigated to this page, we will have an item available as a nav param
    this.faq = navParams.get('qa');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QaDetialPage');
  }

  goBack(e) {
    // if (e.direction == 2){
        //direction 2 = right to left swipe.
    //    this.navCtrl.pop()
    //}
  }

}

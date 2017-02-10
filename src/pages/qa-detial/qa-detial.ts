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
  jokeIdx: number;
  // storage: any;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams) {

    // If we navigated to this page, we will have an item available as a nav param
    this.faq = navParams.get('qa');
    this.jokeIdx = -1;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QaDetialPage');
  }

  save(t) {
    
    // this.local.set('didTutorial', 'true');

  }

  goBack(e) {
    if (e.direction == 2) {
        //direction 2 = right to left swipe.
        this.navCtrl.pop()
    }
  }

  joke(idx) {
    if (this.jokeIdx == idx) {
      this.jokeIdx = -1;
    } else {
      this.jokeIdx = idx;
    }
  }

}

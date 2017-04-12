import { Component } from '@angular/core';
import { Http } from '@angular/http';
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
  feedback: boolean;
  // storage: any;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http) {

    // If we navigated to this page, we will have an item available as a nav param
    this.faq = navParams.get('qa');
    this.jokeIdx = -1;
    this.feedback = false;

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

  feed(x, q) {
    // ... POST FEEDBACK TO ETHERCALC
    /* DEBUG THIS
    this.http.get('https://ethercalc.org/handbook-feedback.csv')
          .map(res => res.json())
          .subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            var time = new Date().toString();
            var d = data;
            console.log(d);
            var cell_lenth = d.split("\n").length;
            console.log(cell_lenth);
            var url = 'https://ethercalc.org/_/handbook-feedback';
            my_post( 'A' + cell_lenth, time);
            my_post( 'B' + cell_lenth, 'mobile');
            my_post( 'C' + cell_lenth, x);
            my_post( 'D' + cell_lenth, q);
            function my_post(cell, text) {
              this.http.post(this.url, 
                      { "command": 'set ' + cell + ' text t ' + text }, {
                          dataType: 'application/json',
                          processData: false
                        }
                      )
                      .map(res => res.json())
                      .catch(err => console.log(err))
              }
          });
    
      */
  }
}

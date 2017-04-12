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
  feedback: boolean;
  // storage: any;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams) {

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
    /*  Translate following Angular1 code to Angular2 Get & Post
    $http({
        method : 'GET',
        url : 'https://ethercalc.org/handbook-feedback.csv'
          }).then(
            function(res) {
                var time = new Date().toString();
                var d = res.data;
                console.log(d);
                cell_lenth = d.split("\n").length;
                console.log(cell_lenth);
                var url = 'https://ethercalc.org/_/handbook-feedback';
                my_post( 'A' + cell_lenth, time);
                my_post( 'B' + cell_lenth, 'mobile');
                my_post( 'C' + cell_lenth, x);
                my_post( 'D' + cell_lenth, q);
                function my_post(cell,text) {
                  $http({
                    method : 'POST',
                    url: url,
                    dataType: 'application/json',
                    processData: false,
                    //data: { "command" : 'append' + '???'}
                    data: { "command": 'set ' + cell + ' text t ' + text}
                  });
                }
            }, function(res){
              console.log(res.statusText)
            }
        )
      */
  }
}

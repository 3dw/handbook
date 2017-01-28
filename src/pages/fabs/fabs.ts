import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { HandbookService } from '../../providers/handbook-service';

/*
  Generated class for the Fabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fabs',
  templateUrl: 'fabs.html',
  providers: [HandbookService]
})
export class FabsPage {
  c:  Array<{t: string, color: string, icon:string, ion:any}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public handbookService: HandbookService) {

    this.c = [];
    this.loadBook();    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FabsPage');
  }

  loadBook(){
     this.handbookService.load()
    .then(data => {
      this.c = data.catagories;
      console.log(data); // tester
    });
  }

  actionTapped(event, myCatagory) {
    this.navCtrl.push(Page2, {
      focusC: myCatagory
    })
  }

  goBack(e){
    this.navCtrl.pop();
  }
}

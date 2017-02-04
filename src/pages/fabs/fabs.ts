import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { HandbookService } from '../../providers/handbook-service';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the Fabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fabs',
  templateUrl: 'fabs.html',
  providers: [HandbookService, Page2]
})
export class FabsPage {
  c:  Array<{t: string, color: string, icon:string, ion:any}>;
  ticks: Number;
  tocks: Number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public handbookService: HandbookService) {

    this.c = [];
    this.ticks = 0;
    this.tocks = 0;
    this.loadBook();    
  }


  ngOnInit(){
    let timer = Observable.timer(1200,800);
    timer.subscribe(t=>this.ticks = t);

    let timer2 = Observable.timer(800,400);
    timer2.subscribe(t=>this.tocks = t);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FabsPage');
  }

  loadBook(){
     this.handbookService.load()
    .then(data => {
      this.c = data.catagories.sort(() => Math.random() - 0.5);
      console.log(data); // tester
    });
  }

  actionTapped(event, myCatagory) {
    this.navCtrl.push(Page2, {
      focusC: myCatagory
    })
  }
}

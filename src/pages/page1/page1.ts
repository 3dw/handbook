import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabsPage } from '../fabs/fabs';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  sides: string[];

  constructor(public navCtrl: NavController) {

  }

  gotoFabs(e) {
    this.navCtrl.push(FabsPage, {})
  }


}

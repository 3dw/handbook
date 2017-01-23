import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HandbookService } from '../../providers/handbook-service';
import { OfflineHandbook } from '../../providers/offline-handbook';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  providers: [HandbookService, OfflineHandbook]
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  colors: string[];
  faqs: Array<{q: string, c: string, as: string[], es: any[]}>; // object[]?

  handbook: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public handbookService: HandbookService,
    public offlineHandbook: OfflineHandbook
    ) {

    this.loadOffline();
    this.loadBook();

    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.icons = ['flask', 'basketball', 'paper-plane'];
    this.colors = ['primary', 'secondary', 'dark'];

    this.faqs = [];
  }

  loadOffline(){
    //...
  }

  loadBook(){
     this.handbookService.load()
    .then(data => {
      this.handbook = data;
      this.faqs = data.faqs;
      console.log(data);
    });
  }


  itemTapped(event, item) {
    // That's strange, we're pushing to ourselves!
    this.navCtrl.push(Page2, {      // <-- this shold change to page3(page_detail)
      item: item
    });
  }
}

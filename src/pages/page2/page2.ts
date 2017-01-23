import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HandbookService } from '../../providers/handbook-service';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  providers: [HandbookService]
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
    public handbookService: HandbookService
    ) {

    this.loadBook();

    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 
                //  'football', 
                  'basketball', 
                  'paper-plane',
                //  'build'
                 ];

    this.colors = ['primary', 
                   'secondary', 
                  // 'danger', 
                  // 'light',
                   'dark'];



    this.faqs = [];
  }

  loadBook(){
     console.log(this.handbookService);
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

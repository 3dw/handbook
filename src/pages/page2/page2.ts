import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  colors: string[];
  items: Array<{title: string, note: string, color: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 
                  'football', 
                  'basketball', 
                  'paper-plane',
                  'build'];

    this.colors = ['primary', 
                   'secondary', 
                  // 'danger', 
                  // 'light',
                   'dark'];


    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: '方法 ' + i,
        note: '不上學，合法嗎?',
        color: this.colors[i % 3],
        icon: this.icons[i % 3]
      });
    }


  }

  itemTapped(event, item) {
    // That's not right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {      // <-- this shold change to page3(page_detail)
      item: item
    });
  }
}

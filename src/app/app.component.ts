import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { CalcTimePage } from '../pages/calc-time/calc-time';
import { CalcStylePage } from '../pages/calc-style/calc-style';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  pages: Array<{title: string, component: any, icon: string, color: string}>;
  tools: Array<{title: string, component: any, icon: string, color: string}>;


  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '首頁', component: Page1, icon: 'home', color: 'primary' },
      { title: '自學方法', component: Page2, icon: 'bonfire', color:'secondary' }
    ];

    this.tools = [
      { title: '時間精靈', component: CalcTimePage, icon: 'time', color: 'primary' },
      { title: '風格精靈', component: CalcStylePage, icon: 'key', color:'secondary' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

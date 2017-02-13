import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabsPage } from '../fabs/fabs';
import { Page2 } from '../page2/page2';
import { CalcTimePage } from '../calc-time/calc-time';

import { ActionSheetController} from 'ionic-angular';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  sides: string[];
  date: number;
  nextDate0: number;
  nextDate1: number;
  nextDate2: number;
  y: number;
  openSheet: boolean;

  constructor(public actionsheetCtrl: ActionSheetController,public navCtrl: NavController) {
  	this.openSheet = false;
    this.y = new Date().getFullYear();
  	this.nextDate0 = new Date('April 30, '+(this.y)+' 00:00:00').getTime();
  	this.nextDate1 = new Date('October 30, '+(this.y)+' 00:00:00').getTime();
  	this.nextDate2 = new Date('April 30, '+(this.y+1)+' 00:00:00').getTime();

  	var ds = [
  		(this.nextDate0 - new Date().getTime()) / 1000 / 60 / 60 / 24,
  		(this.nextDate1 - new Date().getTime()) / 1000 / 60 / 60 / 24,
  		(this.nextDate2 - new Date().getTime()) / 1000 / 60 / 60 / 24
	]

  	this.date = Math.floor(Math.min(ds[0],ds[1],ds[2]));
  }

  panEvent() {
    console.log('pan');
    if (!this.openSheet) this.jumpActionSheet();
  }

  // gotoFabs(e) {
  //   this.navCtrl.push(FabsPage, {})
  // }

  // jumpActionSheet() 方法是比驚奇箱更快的導航方案
  jumpActionSheet() {
    this.openSheet = true;
    let actionSheet = this.actionsheetCtrl.create({
     title: '前往',
     buttons: [
       {
         text: '自學方法',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
           this.openSheet = false;
           this.navCtrl.push(Page2,{})
         }
       },
       {
         text: '時間精靈',
         handler: () => {
           console.log('Time clicked');
           this.openSheet = false;
           this.navCtrl.push(CalcTimePage,{})
         }
       },
       {
         text: '驚喜箱',
         handler: () => {
           console.log('Fabs clicked');
           this.openSheet = false;
           this.navCtrl.push(FabsPage,{})
         }
       },
       {
         text: '取消',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
           this.openSheet = false;
            
         }
       }
     ]
   });
   actionSheet.present();
  }
  
  

}

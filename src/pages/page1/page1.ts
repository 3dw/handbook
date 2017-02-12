import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabsPage } from '../fabs/fabs';

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

  constructor(public actionsheetCtrl: ActionSheetController,public navCtrl: NavController) {
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

  gotoFabs(e) {
    this.navCtrl.push(FabsPage, {})
  }
  /*
  Choose(e)方法是替代驚喜箱的方案
  */
  Choose(e) {
    //this.navCtrl.push(FabsPage, {})
    let actionSheet = this.actionsheetCtrl.create({
     title: '選擇前往分類',
     buttons: [
       {
         text: 'Destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   actionSheet.present();
  }
  
  

}

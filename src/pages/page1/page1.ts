import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HandbookService } from '../../providers/handbook-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [HandbookService]
})
export class Page1 {
  catagories:  Array<{t: string, color: string, icon:string, ion:any}>;
  showFABs: Boolean;

  constructor(
  	public navCtrl: NavController,
    public handbookService: HandbookService) {
    this.showFABs = false;
    this.loadBook();    
  }

  loadBook(){
     this.handbookService.load()
    .then(data => {
      this.catagories = data.catagories;
      console.log(data); // tester
    });
  }

}

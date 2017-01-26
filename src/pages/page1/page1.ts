import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HandbookService } from '../../providers/handbook-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [HandbookService]
})
export class Page1 {

  constructor(
  	public navCtrl: NavController,
    public handbookService: HandbookService) {
    this.loadBook();    
  }

  loadBook(){
     this.handbookService.load()
    .then(data => {
      console.log(data); // tester
    });
  }

}

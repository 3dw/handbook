import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { FabsPage } from '../pages/fabs/fabs';
import { Page2 } from '../pages/page2/page2';
import { QaDetialPage } from '../pages/qa-detial/qa-detial';
import { InCatagory } from '../pipes/inCatagory'


@NgModule({
  declarations: [
    MyApp,
    Page1,
    FabsPage,
    Page2,
    QaDetialPage,
    InCatagory
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    FabsPage,
    Page2,
    QaDetialPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

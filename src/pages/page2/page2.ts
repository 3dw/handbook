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
  faqs: Array<{q: string, c: string, as: string[], es: any[]}>; // object[]?


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

    this.faqs = [{ "q" : "不上學，合法嗎？",
                  "c" : "法源",          
                  "as" : [
                        "教育基本法保障家長的教育選擇權和孩子的受教權。",
                        "經過多年的努力，台灣非學校教育(通稱自學)已經合法，目前比日本、中國、香港、韓國，對自學都更友善、更開放。",
                        "只要經過申請的手續，和過程的評鑑，就可以自訂學習計畫，不必上學。"
                  ],
                  "es" : [
                    { "t": "體制外學校、在家自學有法源了",
                      "h": "http://udn.com/news/story/6886/476385-%E9%AB%94%E5%88%B6%E5%A4%96%E5%AD%B8%…1%E5%9C%A8%E5%AE%B6%E8%87%AA%E5%AD%B8-%E6%9C%89%E6%B3%95%E6%BA%90%E4%BA%86"
                    },
                    { "t": "做個堂堂正正的「不在校上學」學生", 
                      "h": "http://www.homeschool.tw/2014/10/blog-post.html"
                    }
                  ]
                },
                { "q" : "自學申請的時程是什麼時候？",
                  "c" : "申請",
                  "as" : [
                      "在台灣要自學，要申請「非學校型態實驗教育」，你可以搜尋你們戶籍所在地教育局或處的非學校型態教育的網站，下載申請的工具包或是檔案，依照說明，完成實驗計畫，在時間內送件即可。",
                      "一年有兩次，大部份縣市上學期要在4/30日前送件，下學期要申請，要在10/30日前送件。"
                  ],
                  "es": []
                },
                { "q" : "如何經營良好的家庭合作討論文化?",
                  "c" : "家庭",
                  "as" : [
                    "合作討論並不只是彼此對話，要有一些前提和準備，比如願意好好聴人說話，願意幫助對方把話說清楚。",
                    "所以每個人都要先學會「聆聽」。\n好好的，專注聽人把話說完、說清楚，不急著回應或評斷，這也是需要練習的事。"
                  ],
                  "es" : [
                  {
                    "t": "合作討論文化",
                    "h": "https://sites.google.com/site/alearn13994229/a-03/he-zuo-tao-lun-wen-hua"
                  }]
                }];


  }

  itemTapped(event, item) {
    // That's not right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {      // <-- this shold change to page3(page_detail)
      item: item
    });
  }
}

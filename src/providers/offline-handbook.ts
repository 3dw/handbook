import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the OfflineHandbook provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OfflineHandbook {
  data: any;

  constructor() {
    console.log('Hello OfflineHandbook Provider');

    this.data = {
    "catagories": [
      { "t": "申請", "color": "#9ef", "icon": "law", "ion": {"icon":"color-wand"}},
      { "t": "支持", "color": "#f93", "icon": "home", "ion": {"icon":"bonfire"}},
      { "t": "計畫", "color": "#0f0", "icon": "hourglass half", "ion": {"icon":"calendar"}},    
      { "t": "資源", "color": "#c9c", "icon": "in cart", "ion": {"icon":"construct"}}
    ],
    "faqs": [
    { "q" : "不上學，合法嗎？",
      "c" : "申請",          
      "as" : [
            "教育基本法保障家長的教育選擇權和孩子的受教權。",
            "經過多年努力，台灣非學校教育(通稱自學)已合法，目前比日本、中國、香港、韓國，對自學都更友善、更開放。",
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
    { "q" : "自學和中輟有何不同？",
      "c" : "申請",          
      "as" : [
            "合法申請自學，有學籍、有文憑。",
            "教育局會定時考查你的自學計畫與成果。",
            "有審議與成果發表，維持你和教育局的關係。",
            "中輟的話就沒有學籍、文憑、固定和教育局的關係。"
      ],
      "es" : []
    },
    { "q" : "如何提出申請？",
      "c" : "申請",
      "as" : [
        "請聯絡你的戶籍地的縣市的「承辦單位」，下載「非學校教育」的申請書。",
        "各縣市公告的「實驗教育計畫」僅供參考。家庭可自行設計，不一定要完全按照公告的格式。",
        "進一步資訊，可參考「保障教育選擇權聯盟」網站。"
      ],
      "es": [
        { "t": "申請書下載與各縣市承辦人", "h": "http://www.homeschool.tw/p/02-272088896371-edupe.html"}
      ]
    },
    { "q" : "何時要提自學申請？",
      "c" : "申請",
      "as" : [
          "在台灣要自學，要申請「非學校型態實驗教育」，你可以搜尋你們戶籍所在地教育局或處的非學校型態教育的網站，下載申請的工具包或是檔案，依照說明，完成實驗計畫，在時間內送件即可。",
          "一年有兩次，大部份縣市上學期要在4/30日前送件，下學期要申請，要在10/30日前送件。"
      ],
      "es": []
    },
    { "q" : "為什麼自學要有審議?",
      "c" : "申請",
      "as" : [
        "[教育基本法]同時保障家長的[教育選擇權]和孩子的[受教權]，在實行條例中明定和[補習教育]不同。",
        "教育選擇權不能無限擴大，需要機制來保障孩子的受教權。",
        "在更好的機制被研發出來之前，[審議制]是目前政府認為比較可行的方式。"
      ],
      "es": [
        { "t": "教育基本法", "h": "http://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0020045"}
      ]
    },
    { "q" : "審議過程會有問題嗎？",
      "c" : "申請",
      "as" : [
        "1. 有可能你的計畫確實有不夠清楚之處。",
        "2. 若是對方的問題，你可以現場錄音，加上文字說明向教育局發信投訴。",
        "3. 亦可在自學社群（非學校論壇、臉書社團等）尋求支援與共同發聲"
      ],
      "es" : []
    },
    { "q" : "如何跟家人彼此支持合作？",
      "c" : "支持",
      "as" : [
        "合作討論並不只是彼此對話，要有一些前提和準備，比如願意好好聴人說話，願意幫助對方把話說清楚。",
        "要好好溝通，首先要先學會「聆聽」。",
        "好好的聽人把話說清楚，不急著回應、不急著評斷或是反駁，這也是需要練習的事。"
      ],
      "es" : [
      {
        "t": "合作討論文化",
        "h": "https://sites.google.com/site/alearn13994229/a-03/he-zuo-tao-lun-wen-hua"
      }]
    },
    { "q" : "如果父母不支持怎麼辦？",
      "c" : "支持",
      "as" : [
        "學齡階段的自學，一定要父母的支持和簽字。",
        "如果父母一開始不支持，可能有他們的擔心和顧慮。",
        "請你先認真聽懂父母在擔心什麼，再來想想如何讓他們瞭解你的處境與需求。"
      ],
      "es" : []
    },
    {
      "q" : "如何寫計畫書？",
      "c" : "計畫",
      "as" : [
        "每個人的計畫不同，所以沒有標準答案，每個人的計畫書也都會不一樣。",
        "教育局給的格式、週課表等等，也只是參考用。",
        "事實上初次申請自學的人，不太可能訂出每週的學習進度，也不必要。",
        "你可以用每月或是每學期為單位，給自己設訂目標和檢視方式。",
        "此外，一開始自學，留白給興趣試探的時間也很重要。課表不必排滿，可以多留一些空白，彈性運用。"
      ]
    },
    { 
      "q" : "「玩」與「唸書」的平衡？",
      "c" : "計畫",
      "as" : [
        "「玩」與「唸書」可以相容並進。",
        "你中有我，我中有你。",
        "把「玩」的活動做到好，一定需要相關的學習；尋找自己合適的方法、自訂目標與進度的學習，也像是在玩一樣。"
      ]
    },
    { "q" : "自學的時間怎麼安排呢？",
      "c" : "計畫",
      "as" : [
        "離開學校後，健康規律的生活作息要靠自己和家庭來維持。",
        "學習和專業成長的部份，時間安排上，要能專注，不要太切割零散。"
      ],
      "es" : [
        {
          "t": "自學週課表分析",
          "h": "http://pulse.naer.edu.tw/content.aspx?type=N&sid=207"
        }, 
        {
          "t": "一萬小時定律試算機",
          "h": "http://map.alearn.org.tw/tools/10khrs"
        }]
    },
    { 
      "q" : "自學對未來出路有幫助嗎？",
      "c" : "計畫",
      "as" : [
        "每家的方法不盡相同，很難一概而論。",
        "不過，因為自學可以為自身量身打造，所以可以視情況和能力，接觸專業社群，多認識不同圈子",
        "並且，時間自行安排下，可以培養專注和實現中長程目標的習慣。這樣的自學對於未來的自主生活與工作能力都很好。"
      ]
    },
    { "q" : "在家自學，怎麼交朋友？",
      "c" : "支持",
      "as" : [
        "在家自學只是沒有每天上學，並不是一直待在家裡不出門。",
        "大部份自學家庭，都會找到孩子接觸人際的機會，依興趣、依地緣來參與社群。",
        "交友圈可能很多元，往往還能更長久，不會因為在學校的畢業或重新分班就被拆散。"
      ],
      "es": [{
        "h": "http://map.alearn.org.tw/we/",
        "t": "自學2.0互助地圖"
      }]
    },
    { "q" : "我家附近有人自學嗎？",
      "c" : "支持",
      "as" : [
        "除了跟認識的朋友處打聽，你還可以在社交網站上尋找在地的自學社團。",
        "也可上[自學2.0互助地圖]登錄自己和尋找夥伴，彼此認識。"
      ],
      "es": [{
        "h": "http://map.alearn.org.tw/we/",
        "t": "自學2.0互助地圖"
      }]
    },
    { "q" : "有可能每週只上學三天嗎？",
      "c" : "計畫",
      "as" : [
        "可以，這也是一種自學計畫",
        "你可以跟教育局申請自學，自學計畫將學校資源列入。",
        "同時也要跟學校老師溝通好。",
        "祝你和老師的溝通順暢。"
      ],
      "es": []
    },
    { "q" : "學校也會改嗎？",
      "c" : "計畫",
      "as" : [
        "學校當然會改革，十幾年來一直在教改。",
        "每所學校、每個班級和老師都有各別差異，無法一概而論",
        "自學(非學校教育)旨在讓家庭有權利選擇自訂計畫，不是只能上學。",
        "當學校不是唯一的教育方式，家庭有自由流動的權利時，對於學校的改革進步也會有益。"
      ],
      "es": []
    },
    { "q" : "自學師資怎麼找？",
      "c" : "資源",
      "as" : [
        "你可以就近找認識的親朋好友，也可以尋求學校或各方的師資，當然也可以活用書本與網路資源。",
        "在計畫書中列舉的師資，不一定要有教師證。",
        "任何相關領域的工作經驗，都可以當作證明。",
        "因此，我們對「老師」的想像，可以放到一個更大的範圍。"
      ],
      "es": []
    },
    { "q" : "自學很花錢嗎？",
      "c" : "資源",
      "as" : [
        "不一定。因每個家庭的計畫而異噢。",
        "你可使用免費學習資源，像是公立圖書館、博物館、網路教材，也可參與面對面或是網路上的學習社群。",
        "也可以用[換工]的方式來替代[學費]，或是在願意栽培新人技藝的工作室當[學徒]。",
        "在社群中，多和有經驗的自學家庭打聽，可以瞭解更多資源喔！"
      ],
      "es": []
    },
    { "q" : "自學有政府的教育經費嗎？",
      "c" : "資源",
      "as" : [
        "現況(2017)是：",
        "1. 中小學階段，自學生的教育單位成本，全部撥給設籍學校。",
        "2. 高中職階段，自學有一些補助。",
        "最新方案請詢問教育局的承辦人員。"
      ],
      "es": [
        { "t": "炸蝦便當寓言", "h": "https://homeschool.hackpad.com/JnIeVmNyy7L"}
      ]
    },
    { "q" : "邊鄉部落可以自學嗎？",
      "c" : "資源",
      "as" : ["事實上有部落自學的先例，透過互助合作、耆老與家長協同傳承文化，部落自行辦學、發展共同經濟"],
      "es": [
        { "t": "八八風災後大社部落返鄉自學", "h": "http://titv.ipcf.org.tw/news-6901"},
        { "t": "司馬庫斯部落自學與共同經濟", "h": "http://www.meworks.net/meworksv2/meworks/page1.aspx?no=4073"}
      ]
    }]         
  }
  }

  load() {
    //...
  }

}

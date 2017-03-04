import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OfflineStyletest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OfflineStyletest {
  data: any;

  constructor(public http: Http) {
    console.log('Hello OfflineStyletest Provider');

    this.data = {"qs":
  [{"t":
    "回想一下，你是如何學習新事物的，試著避開選擇像肢體類的技術學習，如騎腳踏車。你比較偏好從：（可複選）",
    "cs":
    ["文字解說，如手冊或是教科書。",
      "  觀看現場的示範","圖片或是圖表－視覺上的提示","別人解釋或是問問題"],"checked":
    [false,false,false,false],"rs":["r","k","v","a"]},
	{"t":
	  "你想學習一個新的程式語言、電腦技術或是電玩，你會：（可複選）",
	  "cs":
	  ["使用滑鼠或是鍵盤，先做再說",
	    "閱讀相關文件，如說明書、教科書","根據書中的圖片指示學習"," 跟其他知道這項程式的人討論"],"checked":
	  [false,false,false,false],
	  "rs":["k","r","v","a"]},
	{"t":
	  "一個旅行團想認識在你的區域內的公園或是野生動物保護區，你會：（可複選）",
	  "cs":
	  ["帶他們到公園或是野生動物保護區並且和他們一起在裏面逛","展示網路上的圖片、相片或是攝影集給他們看","給他們關於這個公園或是保護區的介紹小冊子","跟他們聊或是安排一個關於這個公園或是保護區的解說活動"],"checked":
	  [false,false,false,false],
	  "rs":["k","v","r","a"]},
	{"t":
	  "我喜歡的網站，最好要有：（可複選）",
	  "cs":
	  ["我可以按、可以移動與嘗試的物件"  ,"有聲音介紹，如我可以聽到音樂、廣播或是訪談","有趣的文字介紹、條目與解釋","有趣的設計與視覺效果"],"checked":
	  [false,false,false,false],
	  "rs":["k",
	  "a",
	"r",
	"v"]},
	{"t":
	  "你想為你的家人煮一頓特別的好料吃，你會：（可複選）",
	  "cs":
	  ["詢問好朋友他們的建議",
	    "直接就煮就是了，不用任何的指導","從食譜中的圖片得到靈感","去讀食譜，閱讀材料與步驟，找到你認為最好的。"],"checked":
	  [false,false,false,false],
	  "rs":["a",
	  "k",
	"v",
	"r"]},
	{"t":
	  "除了價格之外，當你想買一本非小說類的書，什麼因素影響你的決定？（可複選）",
	  "cs":
	  ["這本書的封面與外觀",
	    "迅速的讀過它","有朋友談論它並推薦它","這本書有現實生活的故事、經驗與例子"],"checked":
	  [false,false,false,false],
	  "rs":["v",
	  "r",
	"a",
	"k"]},
	{"t":
	  "當你在餐廳或是咖啡館點菜時，你會：（可複選）",
	  "cs":
	  ["從菜單上的文字描述選擇", "或是詢問朋友他們推薦的菜色","點你之前點過的","看看別人吃的或是菜單上的圖片"],"checked":
	  [false,false,false,false],
	  "rs":["r",
	  "a",
	"k",
	"v"]},
	{"t":
	  "你想告訴別人如何到機場、市中心或是火車站，你會：（可複選）",
	  "cs":
	  ["和他一起去",
	    "寫下如何去的指示","告訴他如何走","畫地圖或是給他地圖"],"checked":
	  [false,false,false,false],
	  "rs":["k",
	  "r",
	"a",
	"v"]},
	{"t":
	  "你經由書、光碟或是網站來學如何用你的新數位相機拍照，你會喜歡：（可複選）",
	  "cs":
	  ["明確的書面指示，並列出如何拍照的重點","展示許多好的與不好的照片的例子並且如何改善它們的方法。","相機的結構圖並且標出每個部份的功能","一個可以讓人問問題而且討論相機的功能的機會，如網站上的討論區"],"checked":
	  [false,false,false,false],
	  "rs":["r",
	  "k",
	"v",
	"a"]},
	{"t":
	  "你想買一台新的數位相機或是手機，除了價格外，什麼因素最能影響你的決定？（可複選）",
	  "cs":
	  ["店員告訴我，介紹給我它的特色",
	    "閱讀所有關於產品特色的文件","動手試驗","外觀看起來是否有型？是否順眼？"],"checked":
	  [false,false,false,false],
	  "rs":["a",
	  "r",
	"k",
	"v"]},
	{"t":
	  "你正為一個團體策畫節慶活動，你會如何展示你的構想，並收集他們對這項活動的想法？（可複選）",
	  "cs":
	  ["打電話、寫信或是寄電子郵件給他們","向他們描述這個活動最重要的部份","給他們一份印出來的行程表","使用地圖或是網站來展示"],"checked":
	  [false,false,false,false],
	  "rs":["k",
	  "a",
	"r",
	"v"]},
	{"t":
	  "你將要在一個重要場合發表演說，你會如何準備？（可複選）",
	  "cs":
	  ["寫下幾個關鍵字，並反覆地練習你的演說","收集許多例子與故事，讓這個演說變得實際有用","做圖表、收集圖片來解釋事物","寫下你的講稿，並且反覆的閱讀它"],"checked":
	  [false,false,false,false],
	  "rs":["a",
	  "k",
	"v",
	"r"]},
	{"t":
	  "膝蓋有問題，你喜歡醫生怎麼做？（可複選）",
	  "cs":
	  ["使用一個塑膠的膝蓋模型，向你展示哪邊出了問題","用一個圖來解釋","仔細的描述問題在那裏","給你一個網站，或是介紹，讓你能夠閱讀"],"checked":
	  [false,false,false,false],
	  "rs":["k",
	  "v",
	"a",
	"r"]},
	{"t":
	  "你喜歡老師或是演講者使用：（可複選）",
	  "cs":
	  ["模型、示範或是實際操作的部份",
	    "問與答、對談、小組討論或是邀請講者","圖片、圖說與圖表","手冊、書本、文字重點"],"checked":
	  [false,false,false,false],
	  "rs":["k",
	  "a",
	"v",
	"r"]},
	{"t":
	  "你不確定一個字要拼成 dependent 還是 dependant時，你會：（可複選）",
	  "cs":
	  ["把兩個字都寫在紙上，選一個",
	    "在腦中「看」這個字，並且從他們看起來的外觀來選","查字典","想想這兩個字的發音，並且選擇一個"],"checked":
	  [false,false,false,false],
	  "rs":["k",
	  "v",
	"r",
	"a"]},
	{"t":
	  "你完成了某項測試，你會喜歡那種方式呈現結果？（可複選）",
	  "cs":
	  ["從你已經做過的試題中舉實例說明","使用詳細的文字說明來描述結果","測試者使用口頭方式來解說結果","使用圖表來展示你的成果"],"checked":
	  [false,false,false,false],
	  "rs":["k","r","a","v"]}],
	  "model": {"r": {"v": 0, "a": 0,"r": 0, "k": 0},
	"l":[6,9],

	"icon":"👍",
	"it$$":"🐬何謂學習風格？",
	"i":"<p>🔥現代的教育研究者發現，每個人擅長的學習方式都有不同。即使在同一個課室中，每個人去掌握和理解的方法也不一樣。這就是每個人的學習風格。🔥</p><p>學習風格有千百種以上，要細分有很多角度。本測試採取的是「👀視👂聽📖讀作🙌」(VARK)架構，特色是只要回答16個問題，就能讓您很快找出適合自己的有效學習方式。</p>",
	"ow":"原文的問題出處與更多資訊，請至VARK介紹網站",
	"g": "http://www.vark-learn.com/english/index.asp",
	"num": 0}}
	  }

}

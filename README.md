# ionic.handbook.app
自學問答集-手機App版


##參與版本控制

歡迎協作，請先：

1. 註冊一個Github帳號，並將帳號e-mail至bestian@gmail.com
2. bestian會邀你進本專案並開協作權限，請找到「接受邀請」的鈕按下去
3. 按watch訂閱所有本專案的議題討論(新議題會自動e-mail給你)
4. 請修改README.md，試著提交變更上傳

----

* **更多問題**與**錯誤回報**，使用github免費提供的[議題區issues](https://github.com/3dw/handbook/issues)功能，以便分類匯整

* 在[議題區issues](https://github.com/3dw/handbook/issues)所提出的問題與答案都會利用Email傳給大家

* 資源共享與資訊擴充，可以到[本專案的共筆維基區](https://github.com/3dw/handbook/wiki/%E5%AD%B8%E7%BF%92%E8%B3%87%E6%BA%90)

##開發環境

框架使用[ionic2](https://ionicframework.com/)及[angular2](https://angular.io/)，請上去閱讀。
(相關說明文主要都是英文或簡中，可選擇適合自己的來讀)
 本專案上手請：
（其中任何步驟如果卡關，均屬正常，如果自己試了兩次不成，請盡快在[議題區issues](https://github.com/3dw/handbook/issues)提出）

1. 以github的方法，複製(clone)本專案

2. 下載並安裝[node.js](https://nodejs.org/en/)。這會同時安裝它的套件管理器npm
3. 下載ionic。在命令列(window系統則是在node command prompt)輸入

        npm install -g cordova ionic

4. 進入專案目錄(即clone下來的handbook資料夾)，下載相關的所有node模組

        npm install
        
5. 用瀏覽器測試

        ionic serve --lab
6. 每次開始動手前先sync，告一段落請先測試過可以動之後，再commit+sync

7. 寫程式就像做實驗，必須不斷的嘗試。除了專案本身，還可以另外開一個自己可以為所欲為的沙盒(sandbox)。沙盒請開新的專案或fork，不要直接更新此專案。

##瀏覽器模擬
* 優點: 較快
* 缺點: 不能在真正帶出門的情境給別人看

### 方法1：
* 優點: 跨平台測試(加--lab可以同時測ios, andriod, windows三種平台)
* 缺點: 較慢

        ionic serve --lab

### 方法2：
* 優點: 較快

        ionic serve

可搭配使用瀏覽器的手機模擬功能：
1. 用Google Chrome或其他瀏覽器開啟開發人員模式(在執行App頁面按下F12或到選單的更多工具開發人員工具)
2. 開啟後通常會自動開啟手機預覽模式，如果沒有就按下手機平板的圖示並開始行動裝置預覽
3. 直接選擇各種機型在預覽框上方，或者自行調整預覽大小

## 手機實測(可以真正拿著手機和使用者對話)

###方法1(實機測試)
* 優點: 可以在真正帶出門的情境給別人看
* 缺點: 比較慢

1. 安裝ionic view這個app
2. 申請一個ionic平台帳號，再寄給bestian
3. bestian收到後，會把讀取權限分享給你
4. 進入ionic view, 輸入專案id後，就能在手機上測試，也能帶給認識的人試用看看

###方法2(用正規的方法傳輸到手機上deploy)

1. https://ionicframework.com/docs/guide/publishing.html


##開發守則

1. 請先sync，再著手開發。
2. 請先測試過ok，再commit
3. 創作時請注意「守恆性」，已完成的milestone盡量不要破壞。例如二月之後，「斷線也可使用」這件事，應該守恆。使用新的資源時，應測過「斷線也可使用」才算測試ok。
4. 把握以上三點守則後，無論要改什麼，請直接commit，不必過問 

##開發資源

以下是開發資源的文件參考:

1. http://ionicframework.com/ (Ionic文件)

2. https://angular.io/ (Angular框架)

3. https://material.io/guidelines/ (Material Design 介面設計指南)

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

* 被稱作知識的寶庫、資源共享與資訊擴充，可以到[專案維基百科](https://github.com/3dw/handbook/wiki/%E5%AD%B8%E7%BF%92%E8%B3%87%E6%BA%90)

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

5. 用瀏覽器測試(加--lab可以同時測ios, andriod, windows三種平台，不加--lab比較快)

        ionic serve --lab

6. 每次開始動手前先sync，告一段落請先測試過可以動之後，再commit+sync

7. 寫程式就像做實驗，必須不斷的嘗試。因此我們需要一個讓我們為所欲為的沙盒(sandbox)，或想試用不同的開發框架或使用原生(native)來製作App，請開新的專案或專案分支(branch)來實作，不要更新再此專案。

## 手機實測

_如果想要實機測試_
###方法1

1. 安裝ionic view這個app

2. 申請一個ionic平台帳號，再寄給bestian

3. bestian收到後，會把讀取權限分享給你

4. 進入ionic view, 輸入專案id後，就能在手機上測試，也能帶給認識的人試用看看

_如果不想實機測試_
###方法2

1. 使用Google Chrome或其他瀏覽器開啟開發人員模式(在執行App頁面按下F12或到選單的更多工具開發人員工具)

2. 開啟後通常會自動開啟手機預覽模式，如果沒有就按下手機平板的圖示並開始行動裝置預覽

3. 直接選擇各種機型在預覽框上方，或者自行調整預覽大小

##開發資源

以下是開發資源的文件參考:

1. http://ionicframework.com/ (Ionic文件)

2. https://angular.io/ (Angular框架)

3. https://material.io/guidelines/ (Material Design 介面設計指南)

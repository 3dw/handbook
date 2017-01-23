# ionic.handbook.app
自學問答集-手機App版


##參與

歡迎協作，請先：

1. 註冊一個github帳號，並將帳號e-mail至bestian@gmail.com

2. bestian會邀你進本專案並開協作權限

3. 按watch訂閱所有本專案的議題討論(新議題會自動e-mail給你)

4. 提問以及錯誤回報，盡量用github的[議題區issues](https://github.com/3dw/handbook/issues)功能，以便分類匯整

5. 提在[議題區issues](https://github.com/3dw/handbook/issues)的訊息會自動e-mail給所有夥伴，所以不必常用e-mail

6. 學習資源的需求、分享以及擴充，請至[學習資源區](https://github.com/3dw/handbook/wiki/%E5%AD%B8%E7%BF%92%E8%B3%87%E6%BA%90)

##開發

框架使用[ionic2](https://ionicframework.com/)及[angular2](https://angular.io/)，請上去閱讀。
(相關說明文主要都是英文或簡中，可選擇適合自己的來讀)

本專案上手請：
（其中任何步驟如果卡關，均屬正常，如果自己試了兩次不成，請盡快在[議題區issues](https://github.com/3dw/handbook/issues)提出）


1. 以github的方法，複製(clone)本專案

2. 下載並安裝[node.js](https://nodejs.org/en/)。這會同時安裝它的套件管理器npm

3. 下載ionic。在命令列輸入
     
       npm install -g cordova ionic

4. 進入專案目錄，下載相關的所有node模組

        npm install

5. 用瀏覽器測試

        ionic serve

6. 每次開始動手前先sync，告一段落請先測試過可以動之後，再commit+sync

7. 方法不只一種，如果覺得需要一個綀習的沙盒(sandbox)，或想試用不同的開發框架或使用原生(native)來達成，請開新的專案或專案分支(branch)來實作。

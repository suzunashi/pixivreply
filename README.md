pixivReply
==========

pixivReplyとは
-------------
pixivにおいて自分の作品に頂いたコメントに対する返信の入力をサポートする非公式スクリプトです。

使い方
-------------
####【１】下記URLをブラウザでブックマークしてください。  
>```javascript
javascript:(function(){var%20s=document.createElement("script");s.charset="UTF-8";s.src="https://rawgithub.com/suzunashi/pixivreply/master/pixivreply.js";document.body.appendChild(s)})();
>```  
>ブックマークの方法に不明点あれば、[こちら](http://www.lifehacker.jp/2013/04/130402bookmarklet_matome.html)をご参照ください。  
>なおブラウザがFirefoxの場合の、ブックマーク登録の様子は以下のようなイメージです。  
>![Firefoxでのブックマーク登録イメージ](https://raw.github.com/suzunashi/pixivreply/master/img/firefox_bookmark.jpg "Firefoxでのブックマーク登録イメージ")  

#### 【２】コメントを投稿したいpixivの作品画面に移動してください。  
>![pixivのトップ画面](https://raw.github.com/suzunashi/pixivreply/master/img/pixivtop.jpg "pixivのトップ画面")  

#### 【３】 「コメントを見る」「もっと見る」ボタンを押し、すべてのコメントを表示してください。  
>![コメントを見る](https://raw.github.com/suzunashi/pixivreply/master/img/watch_comment.jpg "コメントを見る")  
>![もっと見る](https://raw.github.com/suzunashi/pixivreply/master/img/watch_more_comment.jpg "もっと見る")  

#### 【４】上記【１】で登録したブックマークをクリックしてください。   
>![ブックマークの選択](https://raw.github.com/suzunashi/pixivreply/master/img/select_bookmark.jpg "ブックマークの選択")  

#### 【５】画面が変更され、コメント毎に返信コメント入力フォームが表示されます。  
>![コメント入力画面](https://raw.github.com/suzunashi/pixivreply/master/img/sample_form.jpg "コメント入力画面")  
>入力フォームにコメントを入力したら右隣の「返信」ボタンを押してください。  

#### 【６】全ての返信が終わったらブラウザの更新ボタンを押してください。  
>これにより返信したコメントの内容が確認できます。  

対応ブラウザ
-------------
* Internet Explorer  
* Firefox  
* Google Chrome  

免責事項
-------------
pixivReplyの利用により生じたいかなる損失・損害においても、鈴無蒸(pixivID:278010)は一切の責任を負わないものとします。

Release Note
-------------
* v.1.01 (2014/02/09) pixivのGUIの仕様変更に対応
* v.1.00 (2013/10/12) 初期バージョン公開

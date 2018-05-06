# getBoundingClientRect
[getBoundingClientRect in MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
Element.getBoundingClientRect() 方法會回傳元件的大小和相對位置。

## 語法
```javascript
var domRect = element.getBoundingClientRect();
```
Element.getBoundingClientRect() 回傳一個 DOMRec 物件，該物件是元件呼叫 getClientRects() 所返回的資料的集成。包含了 left, top, right, bottom, x, y, width, 以及 height 屬性，均以 px 作為單位。 除了高度和寬度屬性，其他屬性的值都是相對於螢幕左上角的距離。

## 其他
因為該 top, left 距離都是相對於螢幕左上角的，在畫面有捲動的時候，會得不到我們想要的結果。
所以另外建立另一個 coords 物件，將需要用到的數值都作轉換，將 top, left 屬性額外加上 X,Y 捲動的距離。就能得到想要的結果。


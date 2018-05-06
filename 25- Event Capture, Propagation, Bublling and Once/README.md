# Event Capture, Propagation, Bublling and Once

## Bubbling vs Capture
Bubbling: 事件由內向外傳遞
Capture: 事件由外向內傳遞

以本章的例子來說明，三個 div，由內而外分別是 1, 2, 3\
讓三個 div 都綁定 click 事件，並且會執行函式 logText， console.log 出各自的 classname\
在沒有任何其他設定的情況下，點擊最裡面的 div3，console 出現的順序是： 3 > 2 > 1\
來檢視一下事件是怎麼被傳遞的，當我們點擊 div3 的時候，會從外面一路找到我們點擊的 div3，再更詳細地以這個例子來說，會從 html > body > div1 > div2 > div3 一路找到是 div3 發出 click 事件，這個由外向內傳遞的機制就是 Capture。\
找到 div3 發出 click 之後，事件會由內向外傳遞 (bubble up)，div3 > div2 > div1，因為只有 div 有綁定監聽事件，所以 console 只會印出 3 > 2 > 1，這個由內向外傳遞的機制就是 Bubbling。

### EventTarget.addEventListener() 
[addEventListener in MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener)
```javascript
target.addEventListener(type, listener[, options]);
```
addEventListener 帶了三個參數，第一個是監聽的事件，第二個是事件發生時要執行的函式，第三個就是有關事件監聽的設定。
options 包含了三個屬性：
如果都沒有特別指定的話，事件會以 bubbling 的方式傳遞。
- capture: 布林值。當設定為 true 時，事件的傳遞會使用 capture 的機制傳遞。
- once: 布林值。當設定為 true 時，監聽的事件一但被執行過，該事件監聽就會被移除。也就是事件最多就只會執行一次。
- passive: 布林值。若設為 true，則該監聽絕對不能使用 preventDefault() 去阻擋。如果在此屬性為 true 時，同時使用 preventDefault()，則該 preventDefault 會被忽略並且會在 console 報錯。此屬性預設為 false，但有例外的情況，在 touchstart 和 touchmove 事件下，它預設會是 true。這個設定跟網頁的效能有關，有興趣可以去看[這篇說明](https://developers.google.com/web/updates/2016/06/passive-event-listeners)。

### Event.stopPropagation()
`event.stopPropagation()`: 會阻止事件 bubble up。

### Event.stopImmediatePropagation()
[Event.stopImmediatePropagation() in MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/stopImmediatePropagation)

如果一個元素中註冊了多個相同事件類型的監聽器，監聽器將會按照註冊的先後順序被呼叫。在其中任何一個監聽器執行的期間，若是呼叫了事件物件的 stopImmediatePropagation() 方法，則接下來尚未執行的監聽器皆不會被呼叫。

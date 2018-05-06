# Whack a Mole Game

## 程式邏輯
設定遊戲秒數，間隔隨機的時間會隨機的在不同洞穴跳出地鼠，打中地鼠就會更新分數。

## 使用技巧
`Event.isTrusted`\
布林值。當事件是由使用者操作所觸發的時候才會是 true，如果該事件是由 javascript 或其他方式所觸發，則該屬性會維持 false。可以拿來確認該事件是否是由使用者操作才觸發的。

## 函式要注意的地方
- `randomHole(holes)`\
```javascript
if(hole == lastHole){
  return randomHole(holes);
}
lastHole = hole;
return hole;
```
為了避免連續兩次都是一個洞穴，宣告一個 `lastHole` 變數儲存該次回傳的洞穴，在 if 判斷式中判斷是否和上一次回傳的是同一個洞穴。若是同一個洞穴就重新執行 randomHole(holes)。

- `peep()`\
```javascript
setTimeout(() => {
  hole.classList.remove('up');
  if(!timeUp) peep();
}, time);
```
使用 timeUp 變數來判斷是否遊戲已經結束。每隔一個隨機秒數(time)就重新判斷是否遊戲結束，只要尚未結束就會繼續執行 peep() 函式。這邊多加入了一個移除 `clicked` class 的程式碼，該 classname 是在用來判斷該地鼠是不是已經被點擊過，可以看一下 `bonk()`。

- `start()`\
開始鍵所綁定的函式。在遊戲開始的當下設定初始值給 `timeUp`, `score` 變數。

- `bonk(e)`\
每一個 mole 所綁定的監聽函式。每當地鼠被點擊中的時候會做判斷並回傳分數。
使用到 isTrusted 屬性來做判斷，該屬性在本文一開頭有介紹。

- `setScore()`
用來記錄並顯示目前的最高分，當分數大於先前的最高分時會更新為目前的最高分。(覺得自己寫得沒有很好，還可以再做優化)

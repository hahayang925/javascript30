# Stripe Follow Along Dropdown

```javascript
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
      if(this.classList.contains('trigger-enter')){
        this.classList.add('trigger-enter-active')
      }
    }, 150);
    background.classList.add('open');
    
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width',`${coords.width}px`);
    background.style.setProperty('height',`${coords.height}px`);
    background.style.setProperty('transform',`translate(${coords.left}px, ${coords.top}px)`);
  }
```
要達到使 dropdown 好像會跟著移動的效果，是在於監聽 mouseenter 事件時，除了增加 css classname，還要設定一個 setTimeOut function
。兩個搭配使用才會達成效果。
首先，針對滑鼠滑到的 li 增加 trigger-enter 的 css class，這個 class 會使 .dropdown display: block。但還是保持 opacity: 0。150 毫秒後才會再增加 trigger-enter-active class，使它的 opacity: 1，讓 li 的內容顯示。

另外，為了避免當滑鼠在 li 間快速移動的時候會有文字還沒消失背景已經先消失的情況，也就是當已經增加了 .trigger-enter 但 150 毫秒還沒到滑鼠就已經移出的情況。在 handleEnter 函式多一 if 條件去做判斷。

其他的有關白色背景隨著滑鼠移動的部分，基本上跟第 22 天的做法是差不多的。使用 dropdown.getBoundingClientRect() 來獲得資料，並動態設定 background 的大小以及位置。要注意，當 nav 上面還有別的元素的時候，如果沒有動態設定的話，位置就會跑掉，所以要減去 navCoords.top、navCoords.left。

＊ dropdownBackground 的父元素是 nav，所以它絕對定位的原點是以 nav 的左上角為準，當 nav 的上面沒有任何其他元素的時候，dropdown.getBoundingClientRect() 回傳的 left 還有 top 的值剛好也是以整個網頁的左上角為準，所以不會有問題。但是當 nav 上面還有其他元素的時候，就會發生問題。因此才會需要再減去 avCoords.top、navCoords.left 做調整。讓它在即使上面有其他元素的情況下也可以正常運作而不會跑版。
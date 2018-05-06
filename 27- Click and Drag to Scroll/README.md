#  Click and Drag to Scroll

## 實做說明
設定兩個變數 startX, scrollLeft 紀錄滑鼠點下的數值。
有三個很重要的數值：
- e.pageX : 滑鼠點擊時相對於 document 左邊界的距離。
- HTMLElement.offsetLeft : 返回當前元素左上角相對於HTMLElement.offsetParent 節點的左邊偏移的像素值。
- slider.scrollLeft : slider 水平滾動的距離

對 slider 分別綁定滑鼠的四個事件：
- mousedown
  isDown = true, 用來判斷滑鼠是否有點擊。並且添加 CSS class 增加點擊時的效果。
  startX 紀錄滑鼠點下時距離 slider 左邊邊距的水平距離。
  scrollLeft 紀錄 slider 的捲動距離。
  ```javascript
    isDown = true;
    slider.classList.add('active');
    console.log(e.pageX, scrollLeft);
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  ```
- mouseleave
  移除 CSS class，isDown = false。
- mouseup
  移除 CSS class，isDown = false。
- mousemove
  透過 isDown 判斷滑鼠是否是在 mousedown 的狀態。唯有當滑鼠是 mousedown 的狀態下才會有動作。
  x 代表滑鼠距離 slider 左邊邊界的距離。walk 代表滑鼠點擊之後移動的距離。兩者相減就代表應該要向右捲動的距離。
  這裡稍微改變了一下寫法，把它改成加號，並調換成 (startX - x)，會比較好理解一點，
  ```javascript
    const x = e.pageX - slider.offsetLeft;
    const walk = (startX - x) * 3;
    slider.scrollLeft = scrollLeft + walk;
  ```
  原本的寫法中，因為向右拖拉得到的 x 是負數，所以計算 slider 捲動距離的時候會用減法，才能得到正確的值ㄒ。

  
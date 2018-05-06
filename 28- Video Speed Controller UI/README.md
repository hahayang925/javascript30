# Video Speed Controller

```javascript
const min = 0.4;
const max = 4;
const playbackRate = percent * (max - min) + min;
```
稍微解釋一下這段程式碼，設定最大最小的數值，透過 `percent * (max - min) + min` 計算出播放速率。限制播放速率在我們所設定的最大最小區間裡。

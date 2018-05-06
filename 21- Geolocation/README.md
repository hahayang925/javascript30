# Geolocation
[Geolocation.watchPosition in MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/watchPosition)

Navigator.geolocation，會返回一個 Geolocation 對象，聽過這個對象可以訪問到設備的位置資訊。
調用 Geolocation.watchPosition() 方法。Geolocation.watchPosition() 該方法是用來註冊一個 handler function，每次設備的地理位置發生改變的時候會自動被調用，也可以選擇特定的錯誤處理函數。該方法會返回一個 ID，如果要取消監聽，可以通過 Geolocation.clearWatch() 傳入 ID 來取消。此外，也以選擇是否要設置一個 error handle 函式來處理錯誤的情況。


## 語法
```javascript
id = navigator.geolocation.watchPosition(success[, error[, options]])
```
### Parameters
- success
成功時候的回呼函數，回時傳入一個 Position 對象當作參數。
- error (optional)
失敗時候的回呼函數，會傳入一個 PositionError 對象當作參數。
- options (optional)
一個選擇性的 PositionOptions object，它提供 configuration options 給 location watch。
```javascript
options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};
```

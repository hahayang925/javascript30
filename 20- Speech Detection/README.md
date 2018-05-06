# SpeechRecognition

[SpeechRecognition on MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

## Properties
除了有自己的屬性，SpeechRecognition 也繼承了 EventTarget 的屬性，因為 EventTarget 是他的 parent interface。

- SpeechRecognition.lang\
目前的 SpeechRecognition 的語言。如果沒有特別去設定，預設會是 HTML lang 標籤的值，如果沒有設定 HTML lang 標籤，那預設就會是使用者設備的預設語言。

- SpeechRecognition.interimResults\
該屬性控制是否回傳臨時的結果。如果把屬性設定為 false，它會在整句話都講完之後，才會回傳值，不會在一邊講的時候一邊顯示他覺得可能的結果。
根據 MDN 的解釋，interims results 是尚未結束時候的結果，所謂的尚未結束，就是當 SpeechRecognitionResult.isFinal 等於 false 的時候。

## Event handlers
- SpeechRecognition.onstart\
SpeechRecognition 開始監聽傳入的語音並且開始辨識。

- SpeechRecognition.onend\
SpeechRecognition 中斷並結束。

- SpeechRecognition.onresult\
當 SpeechRecognition 有回傳辨識出的結果的時候執行。


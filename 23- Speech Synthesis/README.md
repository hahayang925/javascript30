# Speech Synthesis

## SpeechSynthesisUtterance
[SpeechSynthesisUtterance in MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)
SpeechSynthesisUtterance 物件包含了朗讀的內容，包括 
```javascript
{
  text: "Hello! I love JavaScript 👍", 
  lang: "", 
  voice: null, 
  volume: 1, 
  rate: 1
}
```
### 屬性
SpeechSynthesisUtterance 繼承了 EventTarget 的屬性。

- SpeechSynthesisUtterance.lang\
獲得及設定朗讀的語言。
- SpeechSynthesisUtterance.pitch\
獲得及設定朗讀的音調。
- SpeechSynthesisUtterance.rate\
獲得及設定朗讀的語速。
- SpeechSynthesisUtterance.text\
獲得及設定朗讀的內容。
- SpeechSynthesisUtterance.voice\
獲得及設定朗讀的聲音。
- SpeechSynthesisUtterance.volume\
獲得及設定朗讀的音量。

## speechSynthesis
[speechSynthesis in MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
SpeechSynthesis 是朗讀服務的控制器，可以截取使用者設備可以使用的聲音，並且停止、開始朗讀，還有其他命令。

### 屬性
SpeechSynthesis 一樣繼承了 EventTarget 的屬性。

- SpeechSynthesis.paused Read only\
布林值。當 SpeechSynthesis 物件是在停止的狀態的時候為 true。
- SpeechSynthesis.pending Read only\
布林值。當 utterance 還有尚未朗讀的的文字的時候會回傳 true。
- SpeechSynthesis.speaking Read only\
布林值。當 utterance 正在朗讀的時候會回傳 true。即使 SpeechSynthesis 是在暫停的狀態，只要 utterance 是在朗讀的狀態就會回傳 true。

### Event handlers
- SpeechSynthesis.onvoiceschanged\
當由 SpeechSynthesis.getVoices()方法返回的 SpeechSynthesisVoice 列表改變時被觸發。

### 方法
- SpeechSynthesis.cancel()\
移除所有在排隊等待朗讀的內容。
- SpeechSynthesis.getVoices()\
回傳 SpeechSynthesisVoice 物件，裡面帶有目前設備可使用的所有聲音。
- SpeechSynthesis.pause()\
將 SpeechSynthesis 物件設置為暫停狀態。
- SpeechSynthesis.resume()\
將 SpeechSynthesis 物件設置到未暫停的狀態，如果當下是暫停的情況就會重新開始。
- SpeechSynthesis.speak()\
新增朗讀文字進去等待朗讀的隊伍，並且在排在它前面的內容都被朗讀之後接著被朗讀。

let countdown; 
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now(); // current timestamp in milliseconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    // 總共剩餘的秒數
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Check if we should stop it!
    if(secondsLeft < 0){
      clearInterval(countdown);
      return
    }
    // display it
    displayTimeLeft(secondsLeft);
    // console.log(secondsLeft)
  }, 1000)
}

// 顯示倒數計時的時間
function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds/3600);
  const minutes = Math.floor((seconds-hours*3600) / 60);
  const remainderSeconds = seconds % 60;
  const display = `${hours == 0 ? '': `${hours}:`  }${minutes < 10? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

// 顯示結束的時間
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustHour = hour > 12 ? hour - 12 : hour; 
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
  // endTime.textContent = `Be Back At ${adjustHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
})
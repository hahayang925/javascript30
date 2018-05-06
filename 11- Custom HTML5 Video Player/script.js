// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.full_screen');

// Build out functions
function togglePlay(){
    const method = video.paused ? 'play':'pause';
    video[method]();
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }
}
function updateButton(){
    const icon = this.paused ? '▶︎':'❚ ❚';
    toggle.textContent = icon;
    // console.log('update button');
}

function skip(){
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRabgeUpdate(){
    video[this.name] = this.value;
    // console.log(this.name);
    // console.log(this.value);
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(e);
}
// fullScreen API - https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API 
function goFullscreen(){
    // console.dir(this);
    if(!document.webkitIsFullScreen){
        player.webkitRequestFullscreen();
    }else{
        console.log('no');
        document.webkitExitFullscreen();
    }
}
// hook up the event listener
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
    button.addEventListener('click', skip);
})

ranges.forEach(range => {
    range.addEventListener('change', handleRabgeUpdate);
})
ranges.forEach(range => {
    range.addEventListener('mousemove', handleRabgeUpdate);
})
let mousedown = false;
progress.addEventListener('click', scrub);
// 如果 && 前面的 mousedown 為true，則會向右執行下一個
// 如果 && 前面的 mousedown 為false，則不會向右執行
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', goFullscreen);
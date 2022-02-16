
// 배경음악 play/ pause기능
const bgaudio = new Audio();
bgaudio.src = "./src/sound/bg.mp3";

  function playBg() {
  bgaudio.play();
}

  function pauseBg() {
    bgaudio.pause();
  }

  // 결과박스 










// var timeInSecs;
// var ticker;

// function startTimer(secs) {
// timeInSecs = parseInt(secs);
// ticker = setInterval("tick()", 1000); 
// }

// function tick( ) {
// var secs = timeInSecs;
// if (secs > 0) {
// timeInSecs--; 
// }
// else {
// clearInterval(ticker);
// startTimer(1*10); //10seconds
// }

// var mins = Math.floor(secs/60);
// secs %= 60;
// var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

// document.getElementById("seconds").innerHTML = pretty;
// }

// startTimer(1*10); //10seconds


//Credits to Gulzaib from Pakistan
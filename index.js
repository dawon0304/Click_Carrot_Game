'use strict'
var CARROT_SIZE = 80;

var field = document.querySelector('.game__field');
var fieldRect = field.getBoundingClientRect();


function initGame(){
  console.log(fieldRect);
  addItem('carrot', 5, 'img/carrot.png');
  addItem('bug', 5, 'img/bug.png');
  
}
  function addItem(className, count, imgPath) {
    const 왼쪽x = 0;
    const 왼쪽y = 0;
    const 오른쪽x = fieldRect.width - CARROT_SIZE;
    const 오른쪽y = fieldRect.height - CARROT_SIZE;
    // 만들고싶은 갯수만큼의 범위 지정해주기
    for (let i =0; i<count; i++){
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      // 우리가 배치할 포지션의 랜던함 값을 지정해주기
      const x = randomNumber(왼쪽x, 오른쪽x);
      const y = randomNumber(왼쪽y, 오른쪽y);
      //  랜덤포지션의 변수들을 아이템(벅스와 캐럿)의 position left와 top값에 지정해주면 들어갈 수 있도록 설정해주기.
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      field.appendChild(item);
    }
  }

  // 지정된 min, max 사이에있는 숫자를 return해주면된다.
  function randomNumber(min, max){
      return Math.random() * (max - min) + min;
  }
initGame();

// game start
var playBtn = document.querySelector('.game__btn');
var score = document.querySelector('.game__score');
var playIcon = document.querySelector('.fa-play');
var stopBtn = playBtn.className('class', 'fa-solid fa-pause');

function playGame(){
  playIcon.className = ".fa-pause";
  
}

function playMusic(){
  var music = new Audio('./sound/bg.mp3');
  music.play();
}
function stopMusic(){
  var music = new Audio('./sound/bg.mp3');
  music.pause();
  music.currentTime = 0;
}
playIcon.addEventListener("click",playGame);
playBtn.addEventListener("click", playMusic);



https://www.delftstack.com/ko/howto/javascript/count-down-timer-in-javascript/



  








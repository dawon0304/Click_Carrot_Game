'use strict'
const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_CONT = 5;
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer'); 
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener('click', ()=> {
  // 게임이 시작됐다면 게임을 멈추면되고, 게임이 멈춘다면 게임을 시작하면됨. 
  if(started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;  //started가 true라면 반대인 false가 할당되고, false라면 true가 할당된다. 
});

  function startGame() {
    initGame();
  }

  function stopGame(){}


  
// var playBtn = document.querySelector('.game__btn');
// var score = document.querySelector('.game__score');
// var playIcon = document.querySelector('.fa-play');



// function playGame(){
//   playIcon.className = ".fa-pause";
  
// }

// function playMusic(){
//   var music = new Audio('./sound/bg.mp3');
//   music.play();
//   music.currentTime = 0;
// }
// function stopMusic(){
//   var music = new Audio('./sound/bg.mp3');
//   music.pause();
//   music.currentTime = 0;
// }


function initGame(){
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_CONT, 'img/bug.png');
  
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










  








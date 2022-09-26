// import height from './a.js';
// import weight from './b.js';
// import age from './c.js';
// import name from './d.js';





const inputA = document.querySelector('#inputHeight');

const inputB = document.querySelector('#inputWeight');

const inputC = document.querySelector('#inputAge');

const inputD = document.querySelector('#inputName');

const display = document.querySelector('#display');

const btn = document.querySelector('#submitBtn');

btn.addEventListener('click', () => {
  if(!inputA.value || !inputB.value || !inputC.value || !inputD.value){
     display.textContent = '프로필을 적어주세요!'
  }
  else {
    display.textContent = `나 ${inputD.value}(은)는 ${inputC.value}세 이고 키는 ${inputA.value}cm에 몸무게는 ${inputB.value}kg입니다!`
  }
  
})


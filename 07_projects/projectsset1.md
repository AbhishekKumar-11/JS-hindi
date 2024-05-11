# projects related to  dom

## projects link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-q95hdh?file=index.html)

# Solution Code 

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// console.log(buttons)

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
 ```

 ## project 2 

 ```javascript
 const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#results');
  // const h = height/100;
  const bmi = (weight / (height * height)).toFixed(2);

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'the given input is not correct ';
    console.log('ferfef');
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = 'the given input is not correct ';
    console.log('ferfef');
  } else {
    result.innerHTML = `${bmi}`;

    if (bmi < 18.6) {
      result.innerText += ` and you are Under Weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerText += ` and you are in  Normal range`;
    } else if (bmi > 24.9) {
      result.innerText += ` and you are Overweight`;
    }
  }
});
 ```

 ## project 3 

 ```javascript
 // here we are selecteting the div we want insert the data into 
 const clock = document.querySelector("#clock");

setInterval( function () {
  // we are calling function date again and again as 
 // and updating the data into that div after every second 
  let date = new Date(); 
  clock.textContent = date.toLocaleTimeString();
},1000 );
 ```
 ## project 4 

 ```javascript
 let random = Math.floor(Math.random() * 100) + 1;

const subt = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const rem = document.querySelector('.lastResult');
const loworHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playGame = true;
let arr = [];
if (playGame) {
  subt.addEventListener('click', (e) => {
    e.preventDefault();
    validateInput(userInput.value);
  });
}

function validateInput(input) {
  //
  if (isNaN(input)) {
    alert('enter a valid number');
  } else if (input > 100) {
    alert('please give  number less than 100');
  } else if (input < 1) {
    alert('please give the intput gtrater than 1 ');
  } else {
    arr.push(input);
    checkInput(input);
    displayInput(input);
  }
}

function checkInput(input) {
  if (input == random) {
    displayMessage('You guuessed it right');
    endGame();
  } else if (input < random) {
    displayMessage('the number is too low ');
  } else if (input > random) {
    displayMessage('the number is too high');
  }
}

function displayInput(input) {
  userInput.value = '';
  guessSlot.innerHTML += `${input} , `;
  rem.innerHTML--;
  if (rem.innerHTML == 0) {

    displayMessage(`Game Over. Random number was ${random}`);
    endGame()
  };
}
function displayMessage(input) {
  loworHigh.innerHTML = input;
}
function endGame() {
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  newGame();
  playGame = false;
}
function newGame() {
  const newGame = document.querySelector('#newGame');

  newGame.addEventListener('click', () => {
    random = Math.floor(Math.random() * 100) + 1;
    arr = [];
    userInput.removeAttribute('disabled');
    rem.innerHTML = `10`;
    guessSlot.innerHTML = ``;
    startOver.removeChild(p);
    loworHigh.innerHTML=``;
    playGame= true;
  });
}
 ```

 ## project 4 byme
 ```javascript
 //

let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);

 const submit = document.querySelector('#subt');
 let arr = [];

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const input = document.querySelector('#guessField');
  const previousGuess = document.querySelector('.guesses');
  const rem = document.querySelector('.lastResult');

  arr.push(input.value);
  let clutter = '';
  for (let i = 0; i < arr.length; i++) {
    clutter += `${arr[i]},`;
  }
  previousGuess.innerHTML = clutter;
  input.value = '';

  rem.innerHTML--;

  if (rem.innerHTML == 0) {
    rem.innerHTML = 10;
    arr = [];
    previousGuess.innerHTML = ``;
  }
  // rem.innerHTML =`${rem}`;
});
 ``` 

 ## project 5 

 ```javascript
  const insert  = document.querySelector("#insert");

 window.addEventListener("keydown", (e) =>{
   insert.innerHTML = `
   <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>keytype</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
   `
 })
 ```

 ## project 6

``` javascript
const range = '123456789ABCDEF';
function randomColor() {
  let ch = '#';
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 15);
    ch += range[random];
  }

  document.querySelector('body').style.backgroundColor = `${ch}`;
}
let interval;

document.querySelector('#start').addEventListener('click', () => {
  interval = setInterval(randomColor, 1000);
});

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(interval);
});
```
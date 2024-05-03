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
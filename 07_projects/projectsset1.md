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
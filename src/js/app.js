console.log('app started');
console.clear();

const input = document.querySelector('.mail');

// First helper

// function handleInput(email) {
//   console.log(email);
// }

// function debounce(fn, delay) {
//   let timeOutId;
//   if (timeOutId) {
//     clearTimeout(timeOutId);
//   }

//   timeOutId = setTimeout(() => {
//     fn();
//   }, delay);
// }

// input.addEventListener('input', (ev) => {
//   debounce(handleInput(ev.target.value), 500);
// });

class inputStream {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  next(v) {
    this.observers.forEach((observer) => observer(v));
  }
}
// stop in 33:47

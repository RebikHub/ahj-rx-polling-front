// import { Observable, fromEvent } from 'rxjs';

import Polling from './polling';
import Server from './server';

console.log('app started');

const server = new Server();
const widget = new Polling(server);

widget.startUpdate();
// const input = document.querySelector('.mail');

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

// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(observer) {
//     this.observers.push(observer);
//   }

//   next(value) {
//     this.observers.forEach((observer) => observer(value));
//   }
// }

// const fromEvent = (element, eventName) => {
//   const subject = new Subject();
//   element.addEventListener(eventName, (ev) => {
//     subject.next(ev.target.value);
//   });
//   return subject;
// };

// const from = (promise) => {
//   const subject = new Subject();
//   promise.then((value) => subject.next(value));
//   return subject;
// };

// const inputStream = fromEvent(input, 'input');

// from(fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((r) => r.json()))
//   .subscribe((email) => console.log(email));

// RxJS

// const stream = new Observable((obs) => {
//   obs.next('Hi');
//   obs.next('my friend!');
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//       obs.next(data);
//       obs.complete();
//     })
//     .catch((err) => obs.error(err));
// });

// const logObserver = {
//   next(value) {
//     console.log(value);
//   },
//   error(err) {
//     console.log(err);
//   },
//   complete() {
//     console.log('completed');
//   },
// };

// const sub = stream.subscribe(logObserver);
// setTimeout(() => {
//   sub.unsubscribe();
//   console.log('stop stream');
// }, 2000);

// const userInput$ = fromEvent(input, 'input');

// const methods = {
//   next(val) {
//     console.log(val.target.value + '00');
//   },
//   completed() {
//     console.log('complete');
//   },
// };

// userInput$.subscribe(methods);

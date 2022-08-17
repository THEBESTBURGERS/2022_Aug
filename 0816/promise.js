'use strict';

// 프로미스는 자바스크립트 안애 내장되어 있는 오브젝트이다.
// 비동기적인 일을 수행할 때 콜백함수 대신 사용하는 것

// 2가지 초점에 맞춰서 공부를 하면 된다.
// 1. State : pending(대기) -> fulfilled(성공) or rejected(실패)
// 2. Producer vs Consumer

// 1. Producer
// 새로운 프로미스가 만들어질때 전달한 executor 콜백함수가 바로 실행된다.
const promise = new Promise((resolve, reject) => {
  // 네트워크나 파일통신같이 시간이 오래걸리는 헤비한일
  console.log('doing somthing...');
  setTimeout(()=>{
    // resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
});


// 2. Consumers
promise
  .then(value => {
    console.log(value);
  })
  .catch(err => console.log(err));


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve, 1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num -1), 1000);
  });
})
.then(num => console.log(num));



// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
.then(hen => getEgg(hen)) // .then(getEgg) 로 생략 가능
.then(egg => cook(egg))
.then(meal => console.log(meal))
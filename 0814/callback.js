'use strict';

// 자바스크립트는 동기적이다. 
// 호이스팅이 된 순서대로 실행된다.

console.log('1');
setTimeout(() => console.log('2'));
console.log('3');

function printImmediately(print_js){
  print();
}

printImmediately(() => console.log('hello'));

'use strict';

// 자바스크립트는 동기적이다. 
// 호이스팅이 된 순서대로 실행된다.

console.log('1');
setTimeout(() => console.log('2'));
console.log('3');

function printImmediately(print_js){
  print();
}

printImmediately(() => console.log('hello'));

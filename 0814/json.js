// let json = JSON.stringify(true);
// // console.log(json);

// json = JSON.stringify(['apple', 'banana']);
// // console.log(json);

const rabbit = {
  name : 'kyoung2', 
  color :'pink',
  size : null,
  birthDate : new Date(),
  jump: () => {
    console.log(`${rabbit.name} can jump!`);
  },
};

// // json = JSON.stringify(rabbit, ["name"]);

// json = JSON.stringify(rabbit, (key, value) => {
//   console.log(`key : ${key}, value : ${value}`);
//   return key;
// });

// console.log(json);
// console.log(rabbit.jump())


// JSOn to Object
json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
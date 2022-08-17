

const id = prompt('enter your id');
const pw = prompt('enter your password');

// const loginUser = () =>
//   new Promise((resolve, reject) => {
//     if((id === "kyoung2" && pw === "1620")){
//       resolve(id)
//     }else{
//       reject(new Error('404'))
//     }
//   })
// const getRoles = (id) => 
//   new Promise((resolve, reject) => {
//     if(id === 'kyoung2'){
//       resolve({name:'kyoung2', role: 'admin'});
//     } else{
//       reject(new Error("no acces"));
//     }
//   })

// loginUser(id)
//   .then(id => getRoles(id))
//   .then(user_obj => console.log(user_obj))
//   .catch()


class UserStorage{
  loginUser(id, pw){
    return new Promise((resolve, reject) => {
      if((id === "kyoung2" && pw === "1620")){
        resolve(id)
      }else{
        reject(new Error('404'))
      }
    })
  }
  getRoles(id){
    return new Promise((resolve, reject) => {
      if(id === 'kyoung2'){
        resolve({name:'kyoung2', role: 'admin'});
      } else{
        reject(new Error("no acces"));
      }
    })
  }
}

const user1 = UserStorage()
user1.loginUser(id)
  .then(id => user1.getRoles(id))
  .then(user_obj => console.log(user_obj))
  .catch(console.log)
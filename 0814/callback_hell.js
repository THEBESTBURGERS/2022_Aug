// class UserStorage {
//   loginUser(id, password, onSuccess, onError){
//     setTimeout(()=> {
//       if((id === "kyoung2" && password === "1620")||(id === "kyoung22" && password === "23761620")){
//         onSuccess(id);
//       } else{
//         onError(new Error('404'));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError){
//     setTimeout(()=>{
//       if(user === 'kyoung2'){
//         onSuccess({name:'kyoung2', role: 'admin'});
//       } else{
//         onError(new Error("no acces"));
//       }
//     }, 1000);
//   }
// }

class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(()=> {
      if((id === "kyoung2" && password === "1620")||(id === "kyoung22" && password === "23761620")){
        onSuccess(id);
      } else{
        onError(new Error('404'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user === 'kyoung2'){
        onSuccess({name:'kyoung2', role: 'admin'});
      } else{
        onError(new Error("no acces"));
      }
    }, 1000);
  }
}
const userStorage = new UserStorage();
// const id = prompt('id');
// const pw = prompt('pw');

const id = 'kyoung';
const pw = '1620';
userStorage.loginUser(
  id,
  pw,
  user => {
    userStorage.getRoles(
      user,
      (obj)=> console.log(obj),
      (err)=> console.log(err)
    )
  },
  err => console.log(err));
// --------------------------------------
// let id = "kyoung2";
// let password = "1620";

// const user1 = new UserStorage()

// const onSuccess = function(id){
//   user1.getRoles(id)
// }
// function onError(err) {
//   err();
// }
// user1.loginUser(id, password, onSuccess(id), onError(()=> console.log()));
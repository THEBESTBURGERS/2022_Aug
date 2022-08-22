const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 세 개의 비동기 처리를 순차적으로 처리
const res = [];
// 3초 뒤에 resolve 수행([]빈 배열에 data로 전달받은 1을 넣음 그다음에)
// 2초 뒤에 resolve 수행([1]배열에 data로 전달받은 2을 넣음 그다음에)
// 1초 뒤에 resolve 수행([1, 2]배열에 data로 전달받은 3을 넣음)
// 그 다음에 콘솔로그로 배열 res([1, 2, 3]) 출력
// 마지막으로 에러 발생시 catch를 사용해 잡아낸다.
requestData1()
  .then(data => {
    res.push(data);
    return requestData2();
  })
  .then(data => {
    res.push(data);
    return requestData3();
  })
  .then(data => {
    res.push(data);
    console.log(res); // [1, 2, 3] ⇒ 약 6초 소요
  })
  .catch(console.error);
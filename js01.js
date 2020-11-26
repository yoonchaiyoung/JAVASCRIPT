// console.log("hello~");

// 자바스크립트에는 총 3종류의 변수 선언이 있다.
// 옛날 방식
var test1 = 10;
// console.log(test1);
// console.log(test1 == 10); // true
// console.log(test1 == "10"); // true
// console.log(test1 === 10); // true
// console.log(test1 === "10"); // false

// ES6 방식

if (test1 === 10) {
  // {} 안이 범위
  console.log("10");
  var test2 = 20;
}
console.log(test1 + test2); // 변수 test2에 대한 호이스팅 현상이 일어남
// 호이스팅 현상 ; 스크립트 언어류에서 민감하게 다루는 주제
// 원래 조건문 안에서 선언된 변수를 밖에서 사용할 수 X, 근데 지금 test2 변수가 사용되고 있음.
// 이게 바로 호이스팅 현상
// 모든 변수가 전역적으로 사용 -> 변수 관리 어려워짐..
// 요즘에는 javascript말고 typescript 사용함

// 변수에 대한 ES6 방식
const test3 = 10;
let test4 = 20;
// const, let 공통점 : 둘 다 호이스팅 현상을 없앴다.

// if (test3 === 10) {
//   const temp = 10;
// }
// console.log(test3 + temp); // 호이스팅 현상X, temp라는 변수가 없다는 에러가 뜬다.
// const : 변경이 안 되는 변수.(상수).

// 한 번 뭐가 등록이 되면 안 바뀌게.
// 화면을 한 번 그리면 유지가 되야 하니까..
// test3 = 30;
// const는 수정 불가능.
// 에러가 남. TypeError: "test3" is read-only
// test3 변경 불가능.

// javascript는 수정보다는 객체 교체를 선호함!
// 새롭게 업데이트된 화면을 그릴 때..

test4 = 50;
// let은 수정 가능.

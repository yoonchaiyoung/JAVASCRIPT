// console.log("Hello");
// console.log("Hi");

// javascript 함수
// javascript 함수 이름은 변수 이름과 같다.
// 익명함수

function foo(a, b) {
    console.log(a, b);
}

var goo = function(a, b){  // 함수의 이름을 만들지 않아도 변수에 넣고 사용가능하다.
    console.log(b, a);
}
foo(10, 20);
foo("hello", "bye");
goo("Hello", "Bye");  // 이런 함수를 익명함수라고 함.

// python의 lambda 함수와 비슷하다.
// 여기까지는 옛날 버전의 함수..



// 이제는 최신 버전
// ES6 기준 함수 (뚱뚱한 화살표 함수 (fat arrow function))
// const hoo = () => {}; 
// 이제는 함수를 이렇게 만듦.
// 변수에 함수를 넣을 수 있다는 특징 때문에 이렇게 간단해짐.

const hoo = (c, d)=>{
    console.log(c, d)
}; 
hoo("Hello", 10);

// 문법 핵심 : 객체, 함수!

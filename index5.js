// callback 함수 있을 때 ; 동기 방식
const foo = () => {
    console.log("Hello");
};
setTimeout(foo, 3000);

console.log("hihi");

// foo 라는 함수가 setTime의 callback 함수가 된다.

// 우선 Hello 출력하는 것 기다릴 동안
// hihi 부터 출력한다.
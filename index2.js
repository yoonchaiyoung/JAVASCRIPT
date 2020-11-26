// package.json 파일
// "start" : "nodemon index2.js"
// 이렇게 index2.js 로 바꿔주기

// 터미널에 npm start 입력하면
// nodemon 자동으로 켜지면서 index2.js 파일의 변화 자동감지해서 실행해줌.

const person1 = {};
// 이렇게 만들어진 객체를 Prototype Object라고 함.
// 아무것도 없는 객체.

// 여기에 더 추가 가능.
person1['name'] = '윤채영';  // 이렇게 데이터 추가
// python의 dictionary랑 똑같음.
// javascript의 핵심 객체! prototype object
person1['age'] = 23;
person1['printme'] = () => {
    console.log(person1.name, person1.age);
}

console.log(person1);
// {key:value, key:value} 의 dictionary 형태

// json? javascript object notation(표현식) ; 자바스크립트 객체 모양. 이라는 뜻
// 자바스크립트에서 사용하는 객체 표현식
// {key:value, key:value} 이런 형태로 표현한다~~

console.log(person1.printme());
// undefined 나오는건 지금 신경 X

// const person2 = {}; // prototype object
const person2 = {
    name: "윤채영2",  // python의 dictionary에서는 "name": "윤채영2" 형식으로 넣어야 하는데 javascript에선 아님
    age: 23,
    // printme:() => {
    //     console.log("person2_printme", person2.name, person2.age);
    // },
};
// person2.printme();

// 에러 발생
// 함수도 javascript 에서는 object
// 객체 : 데이터, 기능을 가짐
// printme 안에 name, age가 없음
// printme 안에서 name, age안에 접근할 수 있는 방법 필요 -> this 활용 -> printme를 포함하고 있는 person2의 name, age를 가져옴
// person2.name, person2.age 객체 참조하고 있는 person2의 name, age 가져오겠다.
// 그냥 this.name, this.age 사용하면 undefined undefined 라고 나오는 데 이유?
// name, age가 생성되는 중이라서(초기화되는 중이라서)

